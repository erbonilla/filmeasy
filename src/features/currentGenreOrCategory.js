import { createSlice } from '@reduxjs/toolkit';

export const genreOrCategory = createSlice({
  name: 'genreOrCategory',
  initialState: {
    genreIdOrCategoryName: '',
    page: 1,
    searchQuery: '',
  },
  reducers: {
    selectGenreOrCategory: (state, action) => {
      state.genreIdOrCategoryName = action.payload;
      state.searchQuery = ''; // Clear search query when selecting a category
    },
    searchMovie: (state, action) => {
      state.searchQuery = action.payload; // Update search query
      state.genreIdOrCategoryName = ''; // Clear genre/category selection during search
    },
  },
});

export const { selectGenreOrCategory, searchMovie } = genreOrCategory.actions;
export default genreOrCategory.reducer;