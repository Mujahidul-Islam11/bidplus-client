/* eslint-disable react/no-unescaped-entities */
import { useLoaderData } from "react-router-dom";

const Details = () => {
  const details = useLoaderData();
  // eslint-disable-next-line no-unused-vars
  const { jobTitle, deadline, price, description, _id } = details || {};
  return (
    <div className="flex container mx-auto gap-6">
      <div className="card mx-auto glass md:w-1/2">
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
      <div className="">
      <div className="bg-slate-400 rounded-xl p-4 md:p-24">
        <h2 className="text-3xl font-extrabold">
          Add Your Informations
        </h2>
        <form>

          <div className="md:flex mb-4">
            <div className="form-control w-full md:w-1/2">
              <label className="label">
                <span className="label-text ">Price you want</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="price"
                  placeholder="Price"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control w-full md:w-1/2 md:ml-4">
              <label className="label">
                <span className="label-text ">Deadline</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="deadline"
                  placeholder="Deadline"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <div className="md:flex mb-4">
            <div className="form-control w-full md:w-1/2">
              <label className="label">
                <span className="label-text ">Your Email</span>
              </label>
              <label className="input-group">
                <input
                  type="date"
                  name="email"
                  placeholder="Email"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control w-full md:w-1/2 md:ml-4">
              <label className="label">
                <span className="label-text ">Buyer's Email</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="buyerEmail"
                  placeholder=""
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <input
            type="submit"
            value="Add Job Information"
            className="btn btn-block"
          />
        </form>
      </div>
    </div>
    </div>
  );
};

export default Details;
