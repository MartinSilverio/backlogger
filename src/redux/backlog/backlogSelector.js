import { createSelector } from '@reduxjs/toolkit';

export const selectBacklog = (state) => state.backlog;

export const selectBacklogList = createSelector(
  [selectBacklog],
  (backlog) => backlog.list
);
