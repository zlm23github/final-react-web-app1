import { createAsyncThunk } from "@reduxjs/toolkit";
import * as service from "./cargo-service";

export const findCargoByNameThunk = createAsyncThunk(
    'cargo/findCargoByName',
    async (name) => {
        const value = await service.findCargoByName(name);
        return value.data
    }
)

export const findCargoByIdThunk = createAsyncThunk(
    'cargo/findCargoById',
    async (cid) => {
        const value = await service.findCargoById(cid);
        return value.data
    }
)

export const findCargoThunk = createAsyncThunk(
    'cargo/findCargo',
    async () => {
        const cargo = await service.findCargo()
        return cargo.data
    }
    
);

export const createCargoThunk = createAsyncThunk(
    'cargo/createCargo',
    async (cargo) => {
        const newCargo = await service.createCargo(cargo)
        return newCargo
    }
);

export const deleteCargoThunk = createAsyncThunk(
    'cargo/deleteCargo',
    async (cargoId) => {
        await service.deleteCargo(cargoId)
        return cargoId
    }
);

export const updateCargoThunk = createAsyncThunk(
    'cargo/updateCargo',
    async (cargo) => await service.updateCargo()
)