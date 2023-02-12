import { React, useCallback, useState, useEffect } from "react";
import { Container, Draggable } from "react-smooth-dnd";
import { Dropdown, Form } from "react-bootstrap";

import './Column.scss';
import Card from "../Card/Card";
import ConfirmModal from "../Common/ConfirmModal";
import { mapOrder } from "../../utilities/sort";
import { MODAL_ACTION_CLOSE, MODAL_ACTION_CONFIRM } from "../../utilities/constants";
import { saveContentAfterPressEnter, selectAllInlineText } from "../../utilities/contentEditable";

function Column(props) {

  const { column, onCardDrop, onUpdateColumn } = props
  const cards = mapOrder(column.cards, column.cardOrder, 'id')

  const [showConfirmModal, setShowConfirmModal] = useState(false)
  const toggleShowConfirmModal = () => setShowConfirmModal(!showConfirmModal)

  const [columnTitle, setColumnTitle] = useState('')
  const handleColumnTitleChange = useCallback((e) => setColumnTitle(e.target.value), [])
  const handleColumnTitleBlur = () => {
    console.log(columnTitle)
    const newColumn = {
      ...column,
      title: columnTitle
    }    
    onUpdateColumn(newColumn)  
  }
  
  useEffect(() => {
    setColumnTitle(column.title)
  }, [column.title]);

  const onConfirmModalAction = (type) => {
    if (type === MODAL_ACTION_CONFIRM) {
      const newColumn = {
        ...column,
        _destroy: true,
      }    
      onUpdateColumn(newColumn)  
    }
    toggleShowConfirmModal()
  }

  return (
    <div className='column'>
      <header className="column-drag-handle">
        <div className="column-title">
          {/* {column.title} */}
          <Form.Control 
            size="sm" 
            type="text" 
            placeholder="Enter column title..." 
            className="trello-content-editable"
            value={columnTitle}
            onChange={handleColumnTitleChange}
            onBlur={handleColumnTitleBlur}
            onKeyDown={saveContentAfterPressEnter}
            onClick={selectAllInlineText}
            onMouseDown={e => e.preventDefault()}
            spellCheck="false"
          />
        </div>
        <div className="column-dropdown-actions">
          <Dropdown>
            <Dropdown.Toggle id="dropdown-basic" size="sm" className="dropdown-btn" />

            <Dropdown.Menu>
              <Dropdown.Item onClick={toggleShowConfirmModal}>Add card...</Dropdown.Item>
              <Dropdown.Item onClick={toggleShowConfirmModal}>Remove column</Dropdown.Item>
              <Dropdown.Item onClick={toggleShowConfirmModal}>Move all cards in this column (beta)...</Dropdown.Item>
              <Dropdown.Item onClick={toggleShowConfirmModal}>Archive all cards (beta)...</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </header>
      <div className="card-list">
      <Container
        orientation="vertical" //default
        groupName="col"
        onDrop={dropResult => onCardDrop(column.id, dropResult)}
        getChildPayload={index => cards[index]}
        dragClass="card-ghost"
        dropClass="card-ghost-drop"
        dropPlaceholder={{
          animationDuration: 150,
          showOnTop: true,
          className: 'card-drop-preview' 
        }}
        dropPlaceholderAnimationDuration={200}
        >
        {cards.map((card, index) => (
          <Draggable key={index}>
            <Card card={card} />
          </Draggable>
        ))}
        </Container>
      </div>
      <footer>
        <div className="footer-actions">
          <i className="fa fa-plus icon" /> Add another card
        </div>
      </footer>

      <ConfirmModal 
        show={showConfirmModal}
        onAction={onConfirmModalAction}
        title="Remove column"
        content={`Are you sure you want to remove <strong>${column.title}</strong>!<br>All related cards will also be removed!`}
      ></ConfirmModal>
    </div>    
  )
}

export default Column