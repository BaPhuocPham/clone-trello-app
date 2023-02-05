import React, { useState, useEffect } from "react";
import { isEmpty } from "lodash";

import './BoardContent.scss'
import Column from "../Column/Column";
import { mapOrder } from "../../utilities/sort";

import { initialData } from "../../actions/initialData";

function BoardContent() {

  const [board, setBoard] = useState({})
  const [column, setColumn] = useState([])

  useEffect(() => {
    const boardFromDB = initialData.boards.find(board => board.id === 'board-1')
    if (boardFromDB) {
      setBoard(boardFromDB)


      setColumn(mapOrder(boardFromDB.columns, boardFromDB.columnOrder, 'id'))
    }
  }, [])

  if (isEmpty(board)) {
    return  <div className="not-found" style={{'padding': '10px', 'color': 'white'}}>Board not found!</div>
  }

  return (
    <div className='board-content'>
      {column.map((column, index) => <Column key={index} column={column} />)}
      {/* <Column /> */}
    </div>
  )
}

export default BoardContent