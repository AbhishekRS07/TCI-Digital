import { ADD_GROUP, DELETE_GROUP, UPDATE_GROUP } from './types';

export const addGroup = () => ({
  type: ADD_GROUP
});

export const deleteGroup = (index) => ({
  type: DELETE_GROUP,
  payload: index
});

export const updateGroup = (index, group) => ({
  type: UPDATE_GROUP,
  payload: { index, group }
});
