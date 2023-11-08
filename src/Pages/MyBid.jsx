import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthProvider";


const MyBid = () => {
    const {user} = useContext(AuthContext)
    const [bidsData, setBidData] = useState()
    useEffect(()=>{
        fetch(`http://localhost:5000/Bids?email=${user.email}`)
        .then(res => res.json())
        .then(data =>{
            setBidData(data)
        })
    },[user])
    return (
        <div className="container mx-auto">
            {
                bidsData?.map(bids => <div key={bids._id} className="overflow-x-auto">
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
                    <tr>
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
                        <button className="btn btn-ghost btn-xs">Pending</button>
                      </th>
                      <th>
                        <button className="btn btn-disabled">Completed</button>
                      </th>
                    </tr>
                  </tbody>
                  {/* foot */}
                  <tfoot>
                    <tr>
                      <th>Email</th>
                      <th>Job Title</th>
                      <th>Deadline</th>
                      <th>Status</th>
                      <th></th>
                    </tr>
                  </tfoot>
                  
                </table>
              </div>)
            }
        </div>
    );
};

export default MyBid;