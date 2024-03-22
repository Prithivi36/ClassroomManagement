import React from 'react'
import { getAbsentsByHour } from '../../../Api/StudentApi'
import {nanoid} from 'nanoid'

function AbsentByHour() {
    const [dateSearch,setDateSearch]=React.useState({
        date:'',
        hour:0
    })
    const [recieved,setRecieved]=React.useState(null)

    function handleChange(event){
        const {name,value}=event.target
        setDateSearch((prev)=>{
            return({...prev,[name]:value})
        })
    }
    
    function absentRequest(){
        getAbsentsByHour(dateSearch.date,dateSearch.hour).then(
            res=>setRecieved(res.data)
        )
    }

    const metaInfo=recieved?recieved.map((stud)=>{
        const id=nanoid()
        return(
            <div key={id} className="card m-1 p-2">
                <p>Register Number : {stud.regNo}</p>
                <p>Name : {stud.studentName}</p>
            </div>
        )
    }):''


  return (
    <div id='SearchByHour' className="modal  fade">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body">
            
            <label htmlFor="dateInfo" className='fw-bolder d-block  m-1'> Date :</label>
            <input onChange={handleChange} name='date' id='dateInfo' style={{border:'solid 1px gray'}} className='bg-white p-2 d-block rounded-3'  type="date" />

            <label htmlFor="hourInfo" className='fw-bolder d-block  m-1'> Hour :</label>
            <select onChange={handleChange} name='hour' id='hourInfo' className='form-control'>
                <option value="">Select Hour</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
            </select>

            <button onClick={absentRequest} className="btn btn-primary me-3 my-2">Check Absent</button>
            {metaInfo}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AbsentByHour