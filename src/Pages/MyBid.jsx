import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthProvider";
import { Helmet } from "react-helmet";


const MyBid = () => {
    const {user} = useContext(AuthContext)
    const [bidsData, setBidData] = useState()
    const handleComplete = (status) =>{
      return status == 'In Progress'
  }
    useEffect(()=>{
        fetch(`http://localhost:5000/Bids?email=${user.email}`,{credentials:'include'})
        .then(res => res.json())
        .then(data =>{
            setBidData(data)
        })
    },[user])
    return (
        <div className="container mx-auto">
          <Helmet>
          <title>Bid Page</title>
        </Helmet>
            <div  className="overflow-x-auto bg-white rounded-lg p-4 container mx-auto">
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
                    {
                      bidsData?.map(bids => <tr key={bids._id}>
                        <td>
                          <div className="flex items-center space-x-3">
                            <div>
                              <div className="font-bold">{bids.email}</div>
                            </div>
                          </div>
                        </td>
                        <td>
                          {bids.title}
                          <br/>
                        </td>
                        <td>{bids.deadline}</td>
                        <th>
                          <button className="btn btn-ghost btn-xs">{bids.status}</button>
                        </th>
                        <th>
                          <button disabled={!handleComplete(bids.status)} className={`btn`}>Completed</button>
                        </th>
                      </tr>)
                    }
                  </tbody>
                  {/* foot */}
                  
                </table>
              </div>
        </div>
    );
};

export default MyBid;