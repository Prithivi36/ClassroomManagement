import React from 'react'
import { getAbsents, getods } from '../../../Api/StudentApi'
import { nanoid } from 'nanoid'
import { useNavigate } from 'react-router-dom'

function AbsentByDateModal() {

    const [dateSearch,setDateSearch]=React.useState(0)
    const [recieved,setRecieved]=React.useState(null)

    function handleChange(event){
        setDateSearch(event.target.value)
    }
    
    function absentRequest(){
        getAbsents(dateSearch).then(
            res=>setRecieved(res.data)
        )
    }
    
    function odRequest(){
        getods(dateSearch).then(
            res=>setRecieved(res.data)
        )
    }

    const navigator=useNavigate()

    const metaInfo=recieved?recieved.map((stud)=>{
        const id=nanoid()
        return(
            <div onClick={()=>navigator(`/student/${stud.regNo}`)} key={id} className="card m-1 p-2">
                <p>Register Number : {stud.regNo}</p>
                <p>Name : {stud.studentName}</p>
            </div>
        )
    }):''


  return (
    <div id='SearchByDate' className="modal  fade">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body">
            
            <label htmlFor="reasonInfo" className='fw-bolder d-block  m-1'> Skills :</label>
            <input onChange={handleChange} name='date' id='dateInfo' style={{border:'solid 1px gray'}} className='bg-white p-2 d-block rounded-3'  type="date" />
            <button onClick={absentRequest} className="btn btn-primary me-3 my-2">Check Absent</button>
            <button onClick={odRequest} className="btn btn-primary my-2">Check On Duty</button>
            {metaInfo}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AbsentByDateModal