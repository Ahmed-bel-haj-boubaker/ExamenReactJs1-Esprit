import axios from "axios";
import { useEffect, useState } from "react";
import Competition from "./Competition";
import Table from "react-bootstrap/Table";
export const Competitions = () => {
  const Api = `http://localhost:3000/competition`;

  const [competition, setcompetition] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(Api);
        setcompetition(response.data);
        console.log(response.data);
        console.log(competition);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [Api]);

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Fees</th>
            <th>Date</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {competition.map((competition, index) => (
            <Competition
              key={index}
              index={index + 1}
              id={competition.id}
              name={competition.name}
              fees={competition.fees}
              date={competition.date}
            />
          ))}
        </tbody>
      </Table>
    </div>
  );
};
