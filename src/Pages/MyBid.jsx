/* eslint-disable react/no-unescaped-entities */
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthProvider";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";

const MyBid = () => {
  const { user } = useContext(AuthContext);
  const [bidsData, setBidData] = useState();
  const handleComplete = (status) => {
    return status == "In Progress";
  };
  useEffect(() => {
    fetch(`https://skill-swap-hub-server.vercel.app/Bids?email=${user.email}`, {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        setBidData(data);
      });
  }, [user]);
  return (
    <div className="container mx-auto my-16 md:my-20">
      <Helmet>
        <title>Bid Page</title>
      </Helmet>
      {bidsData?.length > 0 ? (
        <div className="overflow-x-auto bg-white rounded-lg p-4 container mx-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Email</th>
                <th>Job Title</th>
                <th>Deadline</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {bidsData?.map((bids) => (
                <tr key={bids._id}>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div>
                        <div className="font-bold">{bids.email}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {bids.title}
                    <br />
                  </td>
                  <td>{bids.deadline}</td>
                  <th>
                    <button className="btn btn-ghost btn-xs">
                      {bids.status}
                    </button>
                  </th>
                  <th>
                    <button
                      disabled={!handleComplete(bids.status)}
                      className={`btn`}
                    >
                      Completed
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
            {/* foot */}
          </table>
        </div>
      ) : (
        <div>
          <div className="mb-6 md:mb-12">
            <h3 className="font-bold text-center text-2xl md:text-5xl mb-3">
              No Bids Yet
            </h3>
            <p className="px-2 md:px-64 lg:px-72 text-gray-700 text-center text-sm md:text-lg">
              You haven't placed any bids yet. Once you start bidding on job
              postings, they will appear here for you to track and manage
            </p>
          </div>
          <NavLink to={"/"}>
            <button
              type="button"
              className="btn btn-sm md:btn-md mx-auto flex justify-center border-[#6D54FE] bg-white text-[#6D54FE] hover:bg-[#6D54FE] hover:text-white"
            >
              Get Started
            </button>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default MyBid;
