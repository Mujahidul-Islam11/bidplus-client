import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthProvider";

const BidRequest = () => {
    const {user} = useContext(AuthContext)
    const [bidReq, setBidReq] = useState()

    useEffect(()=>{
        fetch(`http://localhost:5000/BidReq?buyerEmail=${user.email}`)
        .then(res => res.json())
        .then(data =>{
            setBidReq(data)
        })
    },[user])
    return (
        <div>
            {
               bidReq?.map(bid => <div key={bid._id} className="overflow-x-auto container mx-auto">
                <table className="table">
                  {/* head */}
                  <thead>
                    <tr>
                      <th>Email</th>
                      <th>Job Title</th>
                      <th>Deadline</th>
                      <th>Status</th>
                      <th></th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* row 1 */}
                    <tr>
                      <td>
                        <div className="flex items-center space-x-3">
                          <div>
                            <div className="font-bold">{bid.email}</div>
                          </div>
                        </div>
                      </td>
                      <td>
                        {bid.title}
                        <br/>
                      </td>
                      <td>{bid.deadline}</td>
                      <th>
                        <button className="btn btn-ghost btn-xs">{bid.status}</button>
                      </th>
                      <th>
                        <button className="btn">Accept</button>
                      </th>
                        <th>
                        <button className="btn">Reject</button>
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
                      <th></th>
                    </tr>
                  </tfoot>
                  
                </table>
              </div>)
            }
        </div>
    );
};

export default BidRequest;