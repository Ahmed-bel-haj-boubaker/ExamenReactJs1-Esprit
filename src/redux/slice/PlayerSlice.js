import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  participentList: [],
  participantCount: 10,
};

export const playerSlice = createSlice({
  name: "addPlayer",
  initialState,
  reducers: {
    addParticipant: (state, action) => {
      const newParticipant = action.payload;
      const existingParticipant = state.participentList.find(
        (participant) => participant.playerName === newParticipant.playerName
      );
      if (!existingParticipant) {
        state.participentList.push(newParticipant);
        state.participantCount--;
      }
    },
  },
});

export const playerAction = playerSlice.actions;
