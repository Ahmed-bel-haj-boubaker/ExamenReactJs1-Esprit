import { NavLink } from "react-router-dom";

const Competition = ({ index, name, fees, date, id }) => {
  return (
    <tr>
      <td>{index}</td>
      <td>{name}</td>
      <td>{fees}</td>
      <td>{date}</td>
      <td>
        <NavLink to={`/competitions/competionDetails/${id}`}>details</NavLink>
      </td>
    </tr>
  );
};

export default Competition;
