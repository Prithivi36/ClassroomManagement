import React from 'react'
import { meritDecrease, meritIncrease } from '../../../Api/StudentApi'

function ConcMark() {

  const [regNum,setRegNo]=React.useState(0)

  function handleChange(event){
    const {value}=event.target
    setRegNo(value)
  }

  function increase(){
    meritIncrease(regNum).then(
      res=>{console.log(res.data)
      alert("Increased")
      }
    ).catch(err=>{
      alert(err.response.data.message)
    })
  }
  function decrease(){
    meritDecrease(regNum).then(
      res=>{console.log(res.data)
        alert("Decreased")
        }
    ).catch(err=>{
      alert(err.response.data.message)
    })
  }

  return (
    <div id='markConc' className="modal fade">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
        <div  className="modal-body">
          <input onChange={handleChange} placeholder='Enter Reg.no' className='form-control' type="text" />
          <div className="d-flex">
            <button onClick={increase} className='btn mt-3 me-3 btn-sm btn-warning'>Increase</button>
            <button onClick={decrease} className='btn mt-3 btn-sm btn-warning'>Decrease</button>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default ConcMark