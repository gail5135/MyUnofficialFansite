import { createSlice } from "@reduxjs/toolkit";

export interface selectedAlbumState {
	name: string;
}

const initialState: selectedAlbumState = {
	name: "",
};

export const selectedAlbumSlice = createSlice({
	name: "selectedAlbum",
	initialState,
	reducers: {
		select: (state, action: string) => {
			state.name = action.name;
		},
	},
});

export const { select } = selectedAlbumSlice.actions;

export default selectedAlbumSlice.reducer;
