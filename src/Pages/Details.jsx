import { useLoaderData } from "react-router-dom";


const Details = () => {
    const details = useLoaderData()
  const { jobTitle, deadline, price, description, _id } = details || {};
    return (
        <div className="card w-96 mx-auto glass">
  <div className="card-body">
    <h2 className="card-title">{jobTitle}</h2>
    <p>{description}</p>
    <p>Last Date : {deadline}</p>
    <p>Price : {price}</p>
    <div className="card-actions ">
      <button className="btn btn-primary">Place Your Bid</button>
    </div>
  </div>
</div>
    );
};

export default Details;