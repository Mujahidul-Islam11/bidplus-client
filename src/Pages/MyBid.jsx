import { useLoaderData } from "react-router-dom";


const MyBid = () => {
    const bidsData = useLoaderData()
    return (
        <div>
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