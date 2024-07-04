/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const WebDevelopment = ({ webjobs }) => {
  const { jobTitle, deadline, price, description, _id } = webjobs || {};
  return (
    <div className="card border rounded-md shadow-md overflow-hidden hover:scale-105 transition-transform duration-300">
      <div className="card-body">
        <h2 className="card-title">{jobTitle}</h2>
        <p className="text-gray-600">Salary: {price}</p>
        <p className="text-gray-700">{description}</p>
        <p className="text-gray-600">Deadline: {deadline}</p>
        <div className="card-actions justify-center">
          <NavLink to={`/details/${_id}`}>
            <button className="btn btn-primary">Bid Now</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default WebDevelopment;
