import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AddPlayer from "./AddPlayer";
import { useSelector } from "react-redux";

const CompetitionDetails = () => {
  const { id } = useParams();
  const Api = `http://localhost:3000/competition/${id}`;
  console.log(id);
  const [data, setData] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  const listUserName = useSelector((state) => state.participentList);
  const participantCount = useSelector((state) => state.competitions);
  console.log(participantCount.map((e) => e.participants));
  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await axios.get(Api);
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDetails();
  }, [Api]);
  const openFormHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <h1>{data.name}</h1>
      <h2>Price: {data.fees} DT</h2>

      <h2>Date: {data.date}</h2>
      <p>{data.description}</p>
      <h2>
        {participantCount
          .filter((e) => e.id === data.id)
          .map((e) => e.participants)}
      </h2>
      {data.participants === 0 ? (
        <button
          style={{
            backgroundColor: "red",
            color: "black",
            height: "60px",
            width: "100px",
            marginLeft: "200px",
            borderColor: "red",
            borderRadius: "20%",
          }}
          disabled
        >
          Participate
        </button>
      ) : (
        <button
          style={{
            backgroundColor: "green",
            color: "black",
            height: "60px",
            width: "100px",
            marginLeft: "200px",
            borderColor: "red",
            borderRadius: "20%",
            transition: "background-color 0.3s ease",
          }}
          onClick={() => openFormHandler()}
        >
          Participate
        </button>
      )}

      {isOpen && <AddPlayer competitionId={data.id} />}
      <th>UserName</th>
      {listUserName
        .filter((e) => e.competitionId === data.id)
        .map((e, index) => (
          <tr key={index}>
            <td>{e.playerName}</td>
          </tr>
        ))}
    </div>
  );
};

export default CompetitionDetails;
