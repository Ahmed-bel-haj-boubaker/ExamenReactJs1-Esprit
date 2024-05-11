import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  participentList: [],
  competitions: [
    {
      id: "1",
      participants: 10,
    },
    {
      id: "2",
      participants: 0,
    },
  ],
};

export const playerSlice = createSlice({
  name: "addPlayer",
  initialState,
  reducers: {
    addParticipant: (state, action) => {
      const newParticipant = action.payload;
      console.log(newParticipant);
      const existingParticipant = state.participentList.find(
        (participant) => participant.playerName === newParticipant.playerName
      );
      if (!existingParticipant) {
        state.participentList.push(newParticipant);
      }
    },

    decrementParticipantCount: (state, action) => {
      const { competitionId } = action.payload;
      console.log("competitionId",competitionId)
      const competition = state.competitions.find(
        (comp) => comp.id === competitionId
      );
      console.log("com" ,competition)
      if (competition) {
        competition.participants --;
      }
    },
  },
});

export const playerAction = playerSlice.actions;
