import React from 'react';

function AbsentMarkdown() {
    const studentsNumbers = [];
    const [selectedStudents, setSelectedStudents] = React.useState(new Set());
    const [outGoingList,setOutGoingList]=React.useState({
        incomingList:[]
    })
    function addSelectedStudent(student) {
        setSelectedStudents(prevSelectedStudents => {
            const updatedSelectedStudents = new Set(prevSelectedStudents);
            if (updatedSelectedStudents.has(student)) {
                updatedSelectedStudents.delete(student);
            } else {
                updatedSelectedStudents.add(student);
            }
            return updatedSelectedStudents;
        });
    }

    React.useEffect(
        ()=>{
            setOutGoingList({incomingList:[...selectedStudents]})
        },[selectedStudents]
    )
console.log(outGoingList)
    function isSelected(student) {
        return selectedStudents.has(student);
    }

    for (let i = 710722243001; i < 710722243065; i++) {
        studentsNumbers.push(
            <div
                key={i}
                onClick={() => addSelectedStudent(i)}
                className={`card p-3 mt-2 ${isSelected(i) ? 'bg-success text-light' : ' text-dark'}`}
            >
                {i}
                <i className="bi text-success bi-plus-circle-fill"></i>
            </div>
        );
    }

    return (
        <div className='card p-5 m-2'>
            <div className="card mb-3">
                <p className='fw-bolder p-2 mb-2'>Selected Numbers</p>
                <div className="p-3">
                    {[...selectedStudents].map((student, index) => (
                        <div key={index} className="bg-danger text-light card p-3 mt-2">
                            {student}
                            <i className="bi text-success bi-x-circle-fill" onClick={() => addSelectedStudent(student)}></i>
                        </div>
                    ))}
                    <button className="btn btn-primary btn-sm my-2">Submit</button>
                </div>
            </div>
            <input className='form-control' type="number" placeholder='Enter reg. no' />
            {studentsNumbers}
        </div>
    );
}

export default AbsentMarkdown;
