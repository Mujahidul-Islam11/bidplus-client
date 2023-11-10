import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import swal from "sweetalert";

const UpdateDetails = () => {
  const updateDetails = useLoaderData();
  const { jobTitle, deadline, price, description, _id, email } =
    updateDetails || {};


    const handleOnSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const jobTitle = form.jobTitle.value;
    const deadline = form.deadline.value;
    const description = form.description.value;
    const price = form.price.value;
    const category = form.category.value;
    const update = {
      email,
      jobTitle,
      deadline,
      description,
      price,
      category,
    };
    console.log(update);
    fetch(`https://skill-swap-hub-server.vercel.app/JobsId/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(update),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          swal(
            "Well Done",
            "Your Data Has Been Updated Successfully",
            "success"
          );
        }
      });
    console.log(jobTitle);
  };

  return (
    <div className="container mx-auto ">
      <Helmet>
          <title>Updating Page</title>
        </Helmet>
      <div className="bg-cyan-200 p-4 md:p-24 rounded-xl">
        <h2 className="text-3xl  mt-[-50px] font-extrabold">
          Update Job Informations
        </h2>
        <form onSubmit={handleOnSubmit}>
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
                  defaultValue={email}
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
                  defaultValue={jobTitle}
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
                  defaultValue={deadline}
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
                  defaultValue={description}
                />
              </label>
            </div>
          </div>
          <div className="w-full">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text ">Category</span>
              </label>
              <label className="">
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
                  placeholder="Minimum Maximum Price"
                  className="input input-bordered w-full"
                  required
                  defaultValue={price}
                />
              </label>
            </div>
          </div>
          <input type="submit" value="Update" className="btn btn-block" />
        </form>
      </div>
    </div>
  );
};

export default UpdateDetails;
