import { useContext, useRef } from "react";
import { AuthContext } from "./AuthProvider";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const PostNewJob = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate()
  const ref = useRef();

  // POST method -- for adding data to the database
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const jobTitle = form.jobTitle.value;
    const deadline = form.deadline.value;
    const description = form.description.value;
    const price = form.price.value;
    const category = form.category.value;
    const Jobs = {
      email,
      jobTitle,
      deadline,
      description,
      price,
      category,
    };
    console.log(Jobs);
    fetch(`https://skill-swap-hub-server.vercel.app/Jobs`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(Jobs),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.acknowledged){
          swal('Well Done', 'Job Data Added Successfully', 'success')
          navigate('/postedJobs')
        }
        ref.current.reset();
      });
  };

  return (
    <div className="container mx-auto my-16 md:my-20">
      <div className="mb-6 md:mb-12">
        <h3 className="font-bold text-center text-2xl md:text-5xl mb-3">Hire Top Talent - Post Your Job</h3>
        <p className="text-gray-700 text-center text-sm md:text-lg">
        Post your job, set your budget, and get bids instantly. Start now!
        </p>
      </div>
      <div className=" p-4 md:px-16 mx-4 md:py-10 rounded-xl border">
        <Helmet>
          <title>BidPlus | Post new job page</title>
        </Helmet>
        <form onSubmit={handleSubmit}>
          <div className="md:flex mb-4">
            <div className="form-control w-full md:w-1/2">
              <label className="label">
                <span className="label-text ">Email</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  className="input input-bordered w-full"
                  required
                  defaultValue={user.email}
                  readOnly
                />
              </label>
            </div>
            <div className="form-control w-full md:w-1/2 md:ml-4">
              <label className="label">
                <span className="label-text ">Job Title</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="jobTitle"
                  placeholder="Job Title"
                  className="input input-bordered w-full"
                  required
                />
              </label>
            </div>
          </div>
          <div className="md:flex mb-4">
            <div className="form-control w-full md:w-1/2">
              <label className="label">
                <span className="label-text ">Deadline</span>
              </label>
              <label className="input-group">
                <input
                  type="date"
                  name="deadline"
                  placeholder="Job Deadline"
                  className="input input-bordered w-full"
                  required
                />
              </label>
            </div>
            <div className="form-control w-full md:w-1/2 md:ml-4">
              <label className="label">
                <span className="label-text ">Description</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="description"
                  placeholder="Description"
                  className="input input-bordered w-full"
                  required
                />
              </label>
            </div>
          </div>
          <div className="w-full">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text ">Category</span>
              </label>
              <label className="border">
                <select name="category" required className="select w-full">
                  <option value="web-development">Web Development</option>
                  <option value="digital-marketing">Digital Marketing</option>
                  <option value="graphics-design">Graphic Design</option>
                </select>
              </label>
            </div>
          </div>
          <div className="md:flex mb-4">
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text ">Price</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="price"
                  placeholder="Price"
                  className="input input-bordered w-full"
                  required
                />
              </label>
            </div>
          </div>
          <input
            type="submit"
            value="Post Job"
            className="btn w-full btn-sm md:btn-md border-[#6D54FE] bg-white text-[#6D54FE] hover:bg-[#6D54FE] hover:text-white"
          />
        </form>
      </div>
    </div>
  );
};

export default PostNewJob;
