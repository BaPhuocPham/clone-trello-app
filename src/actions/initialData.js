export const initialData = {
  boards: [
    {
      id: 'board-1',
      columnOrder: ['column-1', 'column-2', 'column-3'],
      columns: [
        {
          id: 'column-1',
          boardId: 'board-1',
          title: 'To do column',
          cardOrder: ['card-1', 'card-2', 'card-3', 'card-4', 'card-5', 'card-6', 'card-7'],
          cards: [
            {
              id: 'card-1',
              boardId: 'board-1',
              columnId: 'column-1',
              title: 'Title of card 1',
              cover: 'https://i.pinimg.com/564x/32/d0/a6/32d0a693aa28f4d7f2f48c48dcf0b79c.jpg'
            },
            { id: 'card-2', boardId: 'board-2', columnId: 'column-2', title: 'Title of card 2', cover: null },
            { id: 'card-3', boardId: 'board-3', columnId: 'column-3', title: 'Title of card 3', cover: null },
            { id: 'card-4', boardId: 'board-4', columnId: 'column-4', title: 'Title of card 4', cover: null },
            { id: 'card-5', boardId: 'board-5', columnId: 'column-5', title: 'Title of card 5', cover: null },
            { id: 'card-6', boardId: 'board-6', columnId: 'column-6', title: 'Title of card 6', cover: null },
            { id: 'card-7', boardId: 'board-7', columnId: 'column-7', title: 'Title of card 7', cover: null },
          ]
        },
        {
          id: 'column-2',
          boardId: 'board-1',
          title: 'Inprogress column',
          cardOrder: ['card-8', 'card-9', 'card-10'],
          cards: [
            { id: 'card-8', boardId: 'board-8', columnId: 'column-8', title: 'Title of card 8', cover: null },
            { id: 'card-9', boardId: 'board-9', columnId: 'column-9', title: 'Title of card 9', cover: null },
            { id: 'card-10', boardId: 'board-10', columnId: 'column-10', title: 'Title of card 10', cover: null },
          ]
        },
        {
          id: 'column-3',
          boardId: 'board-1',
          title: 'Done column',
          cardOrder: ['card-11', 'card-12', 'card-13'],
          cards: [
            { id: 'card-11', boardId: 'board-11', columnId: 'column-11', title: 'Title of card 11', cover: null },
            { id: 'card-12', boardId: 'board-12', columnId: 'column-12', title: 'Title of card 12', cover: null },
            { id: 'card-13', boardId: 'board-13', columnId: 'column-13', title: 'Title of card 13', cover: null },
          ]
        }
      ]
    }
  ]
}