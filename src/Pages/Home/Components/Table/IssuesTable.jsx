import React from 'react'

function IssuesTable() {
  return (
    <>
    <div className="tab-pane fade" id="Issues">
        <div className="card flex-row justify-content-between px-4 my-5 py-2">
        <i style={{fontSize:'30px'}} className="bi text-warning bi-star-fill"></i>
        <i style={{fontSize:'30px'}} className="bi text-warning bi-star-fill"></i>
        <i style={{fontSize:'30px'}} className="bi text-warning bi-star-fill"></i>
        <i style={{fontSize:'30px'}} className="bi text-warning bi-star"></i>
        <i style={{fontSize:'30px'}} className="bi text-warning bi-star"></i>
        
        </div>
    </div>
    <button className="btn btn-primary">Add</button>
    </>
  )
}

export default IssuesTable