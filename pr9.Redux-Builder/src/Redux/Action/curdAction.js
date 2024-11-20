// action types
export const ADD_NOTE = 'ADD_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';

// Action creators
export const addNote = (note) => ({
  type: ADD_NOTE,
  payload: note,
});

export const deleteNote = (id) => ({
  type: DELETE_NOTE,
  payload: id,
});
