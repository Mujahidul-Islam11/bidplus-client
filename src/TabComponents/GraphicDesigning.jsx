/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const GraphicDesigning = ({ grdisJobs }) => {
  const { jobTitle, deadline, price, description, _id } = grdisJobs || {};
  return (
    <div className="card border rounded-md shadow-md overflow-hidden hover:scale-105 transition-transform duration-300">
      <div className="card-body">
        <h2 className="card-title">{jobTitle}</h2>
        <p>{price}</p>
        <p>{description}</p>
        <p>{deadline}</p>
        <div className="card-actions justify-center">
          <NavLink to={`/details/${_id}`}>
            <button className="btn bg-[#6D54FE] text-white hover:bg-[#6e54fed8]">
              Bid Now
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default GraphicDesigning;
