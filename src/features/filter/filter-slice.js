import {createSlice} from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: '@@filter',
    initialState: [],
    reducers: {
        addFilter: (state, action) => {
            if (!state.includes(action.payload)) {
                state.push(action.payload);
            }
        },
        removeFilter: (state, action) => {
            return state.filter(filter => filter !== action.payload);
        },
        clearFilter: () => [],
    }
});

export const {addFilter, removeFilter, clearFilter} = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
export const selectFilters = (state) => state.filters;