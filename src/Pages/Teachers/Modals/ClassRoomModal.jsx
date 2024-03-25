import axios from 'axios'
import React from 'react'
import { loginStudent, sendFiles } from '../../../Api/StudentApi'

function ClassRoomModal() {

  const [dataStruct,setDataStruct]=React.useState([])
  const [subject,setSubject]=React.useState('')
  const [sem,setSem]=React.useState('')
  const [file,setFile]=React.useState(null)

  function handelFileChange(event){
    setFile(event.target.files)
  }
  function handleSubmit(){
    const formData=new FormData();
    formData.append('file',file[0])
    sendFiles(formData,sem,subject).then(
      res=>console.log(res.data)
    )
  }


  return (
    <>
        <div id='addMat' className="modal fade">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body">
                <select onChange={(event)=>setSem(event.target.value)} className='form-select' name="semSelector" id="semSelector">
                  <option value="">Choose Semester</option>
                  <option value="Semester1">1</option>
                  <option value="Semester2">2</option>
                  <option value="Semester3">3</option>
                </select>
                <select onChange={(event)=>setSubject(event.target.value)} className='form-select mt-3' name="subjectSelector" id="subjectSelector">
                  <option value="">Choose Subject</option>
                  <option value="AI">AI</option>
                  <option value="DBMS">DBMS</option>
                  <option value="C">C</option>
                  <option value="R">R</option>
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