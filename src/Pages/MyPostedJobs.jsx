/* eslint-disable react/no-unescaped-entities */
import PostedJobDetails from "./PostedJobDetails";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthProvider";
import { Helmet } from "react-helmet";
import Lottie from "lottie-react";
import sorryAnimation from "../../public/sorry!.json";

const MyPostedJobs = () => {
  const { user } = useContext(AuthContext);

  const [userData, setUserData] = useState();

  useEffect(() => {
    fetch(
      `https://skill-swap-hub-server.vercel.app/JobEmail?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setUserData(data);
      });
  }, [userData, user]);
  return (
    <div>
      {userData > 0 ? (
        <div className="grid md:grid-cols-4 container mx-auto gap-4 h-screen">
          <Helmet>
            <title>Posted Job Page</title>
          </Helmet>
          {userData?.map((posted) => (
            <PostedJobDetails
              userData={userData}
              setUserData={setUserData}
              posted={posted}
              key={posted._id}
            ></PostedJobDetails>
          ))}
        </div>
      ) : (
        <div className="mx-auto md:flex justify-center items-center overflow-hidden">
          <div className="items-center text-center">
          <div className="w-[300] md:w-[400px] h-[300px] md:h-[400px]">
            <Lottie animationData={sorryAnimation}></Lottie>
          </div>
          </div>
          <h3 className="text-xl md:text-3xl font-700 text-center mt-4 sm:font-700">You haven't posted any jobs yet!</h3>
        </div>
      )}
    </div>
  );
};

export default MyPostedJobs;
