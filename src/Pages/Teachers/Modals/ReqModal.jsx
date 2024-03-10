import React from 'react'

function ReqModal() {
  return (
    <div id='reqCheck' className="modal fade">
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-body">
                      <table className='table table-dark'>
                        <thead>
                          <tr>

                          <th>Reg.no</th>
                          <th>Name</th>
                          <th>Reason</th>
                          <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>Jhon</td>
                            <td>Fever</td>
                            <td>
                              <button className='btn btn-success'>accept</button>
                              <button className='btn btn-danger ms-2'>Reject</button>
                            </td>
                          </tr>
                          <tr>
                            <td>1</td>
                            <td>Jhon</td>
                            <td>Fever</td>
                            <td>
                              <button className='btn btn-success'>accept</button>
                              <button className='btn btn-danger ms-2'>Reject</button>
                            </td>
                          </tr>
                          <tr>
                            <td>1</td>
                            <td>Jhon</td>
                            <td>Fever</td>
                            <td>
                              <button className='btn btn-success'>accept</button>
                              <button className='btn btn-danger ms-2'>Reject</button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
  )
}

export default ReqModal