import React from 'react'

function AbsentMarkdown() {
    const studentsNumbers= []
    const [SelectedStudents,setSelectedStudents]=React.useState([])

    
    function addSelectedStudent(student){
        setSelectedStudents((prev)=>{
           return([...prev,<p>{student}</p>]) 
        })
    }

        for(let i=710722243001;i<710722243065;i++){
            studentsNumbers.push(<div key={i} onClick={()=>addSelectedStudent(i)} className="card p-3 mt-2">{i}<i className="bi text-success bi-plus-circle-fill"></i></div>)            
        }
    
  return (
    <div className='card p-5 m-2'>
        <div className="card mb-3">
            <p className='fw-bolder p-2 mb-2'>Selected Numbers</p>
            <div className="p-3">
                {SelectedStudents}
                <button className="btn btn-primary btn-sm my-2">Submit</button>
            </div>
        </div>
        <input className='form-control' type="number" placeholder='Enter reg. no' />
        {studentsNumbers}
    </div>
  )
}

export default AbsentMarkdown