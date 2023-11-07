import { useLoaderData } from "react-router-dom";
import PostedJobDetails from "./PostedJobDetails";

const MyPostedJobs = () => {
  const postedJobs = useLoaderData();
  
  return (
    <div className="grid md:grid-cols-4 container mx-auto gap-4">
      {postedJobs.map(posted => <PostedJobDetails posted={posted} key={posted._id}></PostedJobDetails>)}
    </div>
  );
};

export default MyPostedJobs;
