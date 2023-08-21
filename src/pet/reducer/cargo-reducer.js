import { createSlice } from "@reduxjs/toolkit";
import { createCargoThunk, deleteCargoThunk, findCargoThunk, updateCargoThunk} from "../service/cargo-thunk";

const initialState = {
    cargo: [],
    loading: false
}

const currentCargo = {
    "name": "cat1",
    "img": "cat2",
};

const templateCargo = {
    ...currentCargo,
    "name": "cat1",
    "img" : "cat2",
    "desc" : "cat3",
    "sales" : 0,
}

const cargoSlice = createSlice({
    name: "cargo",
    initialState,
    extraReducers: {

        [updateCargoThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                const cargoNdx = state.cargo.findIndex((t) => t._id === payload._id)
                state.cargo[cargoNdx] = { ...state.cargo[cargoNdx], ...payload }
        },

        [createCargoThunk.fulfilled]:
            (state, { payload }) => {
            state.loading = false
            state.cargo.push(payload)
        },

        [deleteCargoThunk.fulfilled] :
            (state, { payload }) => {
            state.loading = false
            state.cargo = state.cargo.filter(c => c._id !== payload)
        },

        [findCargoThunk.pending]:
            (state) => {
                state.loading = true
                state.cargo = [] 
        },

        [findCargoThunk.fulfilled]:
            (state, { payload }) => {
                console.log("I fulfilled");
                state.loading = false
                state.cargo = payload 
        },

        [findCargoThunk.rejected]:
            (state, action) => {
            state.loading = false
            state.error = action.error
        }
    },

    reducers: {
        deleteCargo(state, action) {
          const index = state.tuits
            .findIndex(cargo =>cargo._id === action.payload);
          state.cargo.splice(index, 1);
        },
    
        createCargo(state, action) {
          state.cargo.unshift({
            ...action.payload,
            ...templateCargo,
            _id: (new Date()).getTime(),
          })
        }
      }


});
export const {createCargo, deleteCargo} = cargoSlice.actions;
export default cargoSlice.reducer;