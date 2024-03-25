import React from 'react'
import { nanoid } from 'nanoid'
import { getLeaveRequestByDate } from '../../../../Api/StudentApi'
import { useParams } from 'react-router-dom'

function StatusModal(props) {

  const [recieved,setRecieved]=React.useState(null)
  const [date,setDate]=React.useState(0)

  const {id}=useParams();

  function getRecieved(){
    getLeaveRequestByDate(id,date).then(
      res=>setRecieved(res.data)
    )
  }

  const metaInfo=recieved?recieved.map((req)=>{
    const id=nanoid()
    return(
      <div  key={id} className="card m-1 p-2">
        <p className={req.denied?'text-danger':req.status?'text-success':'text-warning'} ><span className='fw-bolder text-dark' >Date :</span> {req.date}</p>
        <p className={req.denied?'text-danger':req.status?'text-success':'text-warning'} ><span className='fw-bolder text-dark' >Reason :</span> {req.reason}</p>
        <p className={req.denied?'text-danger':req.status?'text-success':'text-warning'} ><span className='fw-bolder text-dark' >Status :</span> {req.denied?'Denied':req.status?'Accepted':'Processing'}</p>
      </div>
    )
  }):props.request?props.request.map((req)=>{
    const id=nanoid()
    return(
        <div  key={id} className="card m-1 p-2">
            <p className={req.denied?'text-danger':req.status?'text-success':'text-warning'} ><span className='fw-bolder text-dark' >Date :</span> {req.date}</p>
            <p className={req.denied?'text-danger':req.status?'text-success':'text-warning'} ><span className='fw-bolder text-dark' >Reason :</span> {req.reason}</p>
            <p className={req.denied?'text-danger':req.status?'text-success':'text-warning'} ><span className='fw-bolder text-dark' >Status :</span> {req.denied?'Denied':req.status?'Accepted':'Processing'}</p>
        </div>
    )
  }):''

  return (
    <div id='StatusCheck' className="modal  fade">
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
                <div className="modal-body">
                  <label htmlFor="achieveDateInfo" className='fw-bolder d-block  m-1'>Specify Date :</label>
                  <input onChange={(event)=>setDate(event.target.value)} id='achieveDateInfo' style={{border:'solid 1px gray'}} className='bg-white p-2 rounded-3'  type="date" />
                  {recieved?<button onClick={()=>{setRecieved(null)}} className="btn btn-secondary ms-1">Clear</button>:<button onClick={getRecieved} className="btn btn-primary ms-2">
                  Search</button>}
                  {metaInfo}
                </div>
            </div>
        </div>
    </div>
  )
}

export default StatusModal