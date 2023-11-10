/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";

const PostedJobDetails = ({ posted, setUserData }) => {
  const handleDeleteJob = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://skill-swap-hub-server.vercel.app/JobsId/${posted._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire(
                "Deleted!",
                "Your job data has been deleted successfully",
                "success"
                );
                const remaining = posted.filter(postedUser => postedUser._id !== id)
                setUserData(remaining)
                
            }
          });
      }
    });
  };
  return (
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
          <button onClick={handleDeleteJob} className="btn btn-primary">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostedJobDetails;
