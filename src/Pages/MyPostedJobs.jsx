
import PostedJobDetails from "./PostedJobDetails";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthProvider";

const MyPostedJobs = () => {
  const {user} = useContext(AuthContext)

  const [userData, setUserData] = useState()

  useEffect(()=>{
    fetch(`http://localhost:5000/JobEmail?email=${user?.email}`)
    .then(res=> res.json())
    .then(data => {
      setUserData(data)
    })
  }, [userData, user])
  return (
    <div className="grid md:grid-cols-4 container mx-auto gap-4">
      {userData?.map(posted => <PostedJobDetails userData={userData} setUserData={setUserData} posted={posted} key={posted._id}></PostedJobDetails>)}
    </div>
  );
};

export default MyPostedJobs;
