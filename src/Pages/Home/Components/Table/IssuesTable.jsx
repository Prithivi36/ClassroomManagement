import React from 'react'

function IssuesTable(props) {

  const count=props.count||0
  const stars=[]
  function renderStarts(count){
    for(let i=1;i<=5;i++){
      if(i<=count){
        stars.push(<i key={i} style={{fontSize:'30px'}} className="bi text-warning bi-star-fill"></i>)
      }else{
        stars.push(<i key={i} style={{fontSize:'30px'}} className="bi text-warning bi-star"></i>)
      }
    }
  }

  renderStarts(count)

  return (
    <>
    <div className="tab-pane fade" id="Issues">
        <div className="card flex-row justify-content-between px-4 my-5 py-2">
          {stars}        
        </div>
    </div>
    </>
  )
}

export default IssuesTable