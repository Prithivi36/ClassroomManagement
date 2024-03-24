import axios from 'axios'
import React from 'react'
import { loginStudent, sendFiles } from '../../../Api/StudentApi'

function ClassRoomModal() {

  const [dataStruct,setDataStruct]=React.useState([])

  const [file,setFile]=React.useState(null)

  function handelFileChange(event){
    setFile(event.target.files)
  }
  function handleSubmit(){
    const formData=new FormData();
    formData.append('file',file[0])
    sendFiles(formData).then(
      res=>console.log(res.data)
    )
  }


  return (
    <>
        <div id='addMat' className="modal fade">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body">
                <select className='form-select' name="semSelector" id="semSelector">
                  <option value="">Choose Semester</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
                <select className='form-select mt-3' name="subjectSelector" id="subjectSelector">
                  <option value="">Choose Subject</option>
                  <option value="1">AI</option>
                  <option value="2">DBMS</option>
                  <option value="3">C</option>
                  <option value="4">R</option>
                </select>

                <input onChange={handelFileChange} type="file" className="custom-file-input mt-3" />
                <button onClick={handleSubmit}>Send</button>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default ClassRoomModal