import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { playerAction } from "../redux/slice/PlayerSlice";

const AddPlayer = ({ competitionId }) => {
  const dispatch = useDispatch();
  const participants = useSelector((state) => state.participentList);
  console.log(participants);
  const [playerName, setPlayerName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (playerName.trim() === "") {
      setError("Please enter a valid player name.");
      return;
    }
    if (participants.find((player) => player.playerName === playerName)) {
      setError("Player name already exists.");
      return;
    }
    dispatch(playerAction.addParticipant({ competitionId, playerName }));
    dispatch(playerAction.decrementParticipantCount({competitionId}));
    setPlayerName("");
    setError("");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <form
        style={{ display: "flex", alignItems: "center" }}
        onSubmit={handleSubmit}
      >
        <h3>username: </h3>
        <input
          type="text"
          placeholder="Username"
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
          style={{
            padding: "10px",
            marginRight: "10px",
            border: "2px solid #ccc",
            borderRadius: "5px",
            width: "200px",
            fontSize: "16px",
          }}
        />
        <button
          style={{
            backgroundColor: "black",
            color: "white",
            height: "40px",
            width: "100px",
            border: "none",
            borderRadius: "20px",
            fontSize: "16px",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
        >
          Confirm
        </button>
      </form>
      {error}
    </div>
  );
};

export default AddPlayer;
