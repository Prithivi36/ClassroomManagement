import React from 'react'
import { getAbsents, getods } from '../../../Api/StudentApi'

function AbsentByDateModal() {

    const [dateSearch,setDateSearch]=React.useState(0)

    function handleChange(event){
        setDateSearch(event.target.value)
    }
    
    function absentRequest(){
        getAbsents(dateSearch).then(
            res=>console.log(res.data)
        )
    }
    
    function odRequest(){
        getods(dateSearch).then(
            res=>console.log(res.data)
        )
    }

  return (
    <div id='SearchByDate' className="modal  fade">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body">
            
            <label htmlFor="reasonInfo" className='fw-bolder d-block  m-1'> Skills :</label>
            <input onChange={handleChange} name='date' id='dateInfo' style={{border:'solid 1px gray'}} className='bg-white p-2 d-block rounded-3'  type="date" />
            <button onClick={absentRequest} className="btn btn-primary me-3 my-2">Check Absent</button>
            <button onClick={odRequest} className="btn btn-primary my-2">Check On Duty</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AbsentByDateModal