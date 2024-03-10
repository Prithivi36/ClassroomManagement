import React from 'react'

function AchievementsModal() {
  return (
    <div id='achievements' className='modal fade'>
        <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content modal-dialog-center">
            <div className="modal-body">
                <table style={{overflow:'hidden'}} className='table table-dark rounded-3 table-striped'>
                    <tbody>
                        <tr>
                            <td>1st in 1stworldwar</td>
                        </tr>
                        <tr>
                            <td>1st in 1stworldwar</td>
                        </tr>
                        <tr>
                            <td>1st in 1stworldwar</td>
                        </tr>
                        <tr>
                            <td>1st in 1stworldwar</td>
                        </tr>
                        <tr>
                            <td>1st in 1stworldwar</td>
                        </tr>
                        <tr>
                            <td>1st in 1stworldwar</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="modal-footer">
                <button data-bs-toggle='modal' className='btn bg-dark text-light'>OK</button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default AchievementsModal