import React from 'react'
import { registerRep } from '../../../Api/StudentApi'

function RepMark() {
    const [regNum,setRegNo]=React.useState(0)

    function handleChange(event){
      const {value}=event.target
      setRegNo(value)
    }
  
    function increase(){
      registerRep(regNum).then(
        res=>{
        alert('Success')}
      ).catch(err=>alert('User '+err.response.data.message))
    }
    
  
    return (
      <div id='markRep' className="modal fade">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
          <div  className="modal-body">
            <input onChange={handleChange} placeholder='Enter Reg.no' className='form-control' type="text" />
            <div className="d-flex">
              <button onClick={increase} className='btn mt-3 me-3 btn-sm btn-warning'>Make Rep</button>
            </div>
          </div>
          </div>
        </div>
      </div>
    )
}

export default RepMark