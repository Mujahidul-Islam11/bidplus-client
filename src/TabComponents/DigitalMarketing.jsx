/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const DigitalMarketing = ({ dMJobs }) => {
  const { jobTitle, deadline, price, description, _id } = dMJobs || {};
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{jobTitle}</h2>
        <p>{price}</p>
        <p>{description}</p>
        <p>{deadline}</p>
        <div className="card-actions justify-center">
          <NavLink to={`/details/${_id}`}>
          <button className="btn btn-primary">Bid Now</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default DigitalMarketing;
