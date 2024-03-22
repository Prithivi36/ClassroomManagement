import React from 'react';
import { sendAbsent, sendOnDuty } from '../../Api/StudentApi';

function AbsentMarkdown() {
    const studentsNumbers = [];
    const [selectedAbsent, setSelectedAbsent] = React.useState(new Set());
    const [selectedOnDuty, setSelectedOnDuty] = React.useState(new Set());
    const [outGoingAbsent,setOutGoingAbsent]=React.useState({
        incomingList:[]
    })
        const [outGoingOnDuty,setOutGoingOnDuty]=React.useState({
        incomingList:[]
    })

    function sendList(){
        sendAbsent(outGoingAbsent).then(
            res=>{
                console.log(res.data)
            }
        )
        sendOnDuty(outGoingOnDuty).then(
            res=>{
                console.log()
            }
        )
        location.reload()
    }

    React.useEffect(
        ()=>{
            setOutGoingAbsent({incomingList:[...selectedAbsent]})
            setOutGoingOnDuty({incomingList:[...selectedOnDuty]})
        },[selectedAbsent,selectedOnDuty]
    )
    

    function setselectedStudent(student,list,setList){
        setList((prev)=>{
            const updatedList=new Set(prev)
            if(list.has(student)){
                updatedList.delete(student)
            }else{
                updatedList.add(student)
            }
            return updatedList
        }
        
        )
        
    }

    function isSelected(student,type){
        return type==='absent'?selectedAbsent.has(student):
        selectedOnDuty.has(student)
    }


    for (let i = 710722243001; i < 710722243065; i++) {
        studentsNumbers.push(
            <div
                key={i}
                className={`card p-3 mt-2 ${isSelected(i,'absent') ? 'bg-success text-light' :isSelected(i,'onDuty')? 'bg-primary text-light':'text-dark' }`}
            >
                {i}
                <div className="">
                <button onClick={()=>setselectedStudent(i,selectedAbsent,setSelectedAbsent)} className="btn me-2 mt-2 btn-sm btn-warning">
                    Absent
                </button>
                <button onClick={()=>setselectedStudent(i,selectedOnDuty,setSelectedOnDuty)} className="btn btn-sm mt-2 btn-warning">
                    OnDuty
                </button>
                </div>
           </div>
        );
    }


    return (
        <div className='card p-5 m-2'>
            <div className="row justify-content-around">
                <div className=" col-md-2 mb-3">
                    <p className='fw-bolder p-2 mb-2'>Tools</p>
                    <button className="btn me-3 mt-2 btn-info text-light">Find Absent By Date 
                    <i className="bi ms-2 bi-calendar-fill"></i>
                     </button>
                    <button className="btn me-3 mt-2 btn-info text-light">Find On Duty By Date
                    <i className="bi ms-2 bi-calendar-event-fill"></i>
                    </button>
                    <button className="btn me-3 mt-2 btn-info text-light">Find Absent on Hour
                    <i className="bi bi-clock-fill  ms-2"></i>
                    </button>
                    
                </div>
                <div className="row col justify-content-center">
                    <div className="card col-md-4 me-md-2 mb-3">
                        <p className='fw-bolder p-2 mb-2'>Selected Absent</p>
                        <div className="p-3">
                            {[...selectedAbsent].map((student, index) => (
                                <div key={index} onClick={() => setselectedStudent(student,selectedAbsent,setSelectedAbsent)} className="bg-danger text-light card p-3 mt-2">
                                    {student}
                                    <i className="bi text-success bi-x-circle-fill" ></i>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="card col-md-4 mb-3">
                    <p className='fw-bolder p-2 mb-2'>Student on Duty</p>
                    <div className="p-3">
                        {[...selectedOnDuty].map((student, index) => (
                            <div key={index} onClick={() =>setselectedStudent(student,selectedOnDuty,setSelectedOnDuty)} className="bg-danger text-light card p-3 mt-2">
                                {student}
                                <i className="bi text-success bi-x-circle-fill" ></i>
                            </div>
                        ))}
                    </div>
                    </div>
                    <div className="justify-content-center row">
                        <button onClick={sendList} className="btn mb-3 col-md-1 btn-primary btn-sm my-2">Submit</button>
                    </div>
                </div>
                
            </div>
            
            {studentsNumbers}
        </div>
    );
}

export default AbsentMarkdown;
