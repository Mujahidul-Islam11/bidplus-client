import { NavLink, useLoaderData } from "react-router-dom";

const MyPostedJobs = () => {
  const postedJobs = useLoaderData();
  return (
    <div className="grid md:grid-cols-4 container mx-auto gap-4">
      {postedJobs.map((posted) => (
        <>
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">{posted.jobTitle}</h2>
              <p>{posted.price}</p>
              <p>{posted.description}</p>
              <p>{posted.deadline}</p>
              <div className="card-actions justify-between ">
                <NavLink to={`/updateDetails/${posted._id}`}>
                  <button className="btn btn-primary">Update</button>
                </NavLink>
                <button className="btn btn-primary">Delete</button>
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default MyPostedJobs;
