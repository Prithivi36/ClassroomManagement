import React from 'react';
import { sendFiles } from '../../../Api/StudentApi';
import { Dummydata } from '../../Classroom/Dummydata';

function ClassRoomModal() {
  const [subject, setSubject] = React.useState('');
  const [sem, setSem] = React.useState('');
  const [file, setFile] = React.useState(null);

  function handelFileChange(event) {
    setFile(event.target.files);
  }

  function handleSubmit() {
    const formData = new FormData();
    formData.append('file', file[0]);
    sendFiles(formData, sem, subject).then(
      res => console.log(res.data),location.reload()
    ).catch(err=>alert(err.response.data.message?err.response.data.message:'File upload unsuccessful'));
  }

  return (
    <>
      <div id='addMat' className="modal fade">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <select onChange={(event) => setSem(event.target.value)} className='form-select' name="semSelector" id="semSelector">
                <option value="">Choose Semester</option>
                <option value="Semester1">1</option>
                <option value="Semester2">2</option>
                <option value="Semester3">3</option>
                <option value="Semester4">4</option> 
              </select>
              {sem && (
                <select onChange={(event) => setSubject(event.target.value)} className='form-select mt-3' name="subjectSelector" id="subjectSelector">
                  <option value="">Choose Subject</option>
                  {Dummydata[sem] && Object.keys(Dummydata[sem]).map((subject, index) => (
                    <option key={index} value={subject}>{subject}</option>
                  ))}
                </select>
              )}

              <input onChange={handelFileChange} type="file" className="custom-file-input btn btn-dark d-block mb-3 mt-3" />
              <button className='btn btn-primary' onClick={handleSubmit}>Send</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ClassRoomModal;
