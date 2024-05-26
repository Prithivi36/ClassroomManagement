import React from 'react';
import { getAllStudent, sendAbsent, sendMessage, sendOnDuty } from '../../Api/StudentApi';
import AbsentByDateModal from './Modals/AbsentByDateModal';
import AbsentByHour from './Modals/AbsentByHour';
import { useNavigate } from 'react-router-dom';
import loadingImg from '../../Common/Loading.gif'

function AbsentMarkdown() {
    const studentsNumbers = [];
    const [sending,setSending]=React.useState(false)
    const [metaInfo,setMetaInfo]=React.useState([])
    const [loading,setLoading]=React.useState(true)
    const [selectedAbsent, setSelectedAbsent] = React.useState(new Set());
    const [selectedOnDuty, setSelectedOnDuty] = React.useState(new Set());
    const [outGoingAbsent,setOutGoingAbsent]=React.useState({
        incomingList:[]
    })
    const [outGoingOnDuty,setOutGoingOnDuty]=React.useState({
        incomingList:[]
    })
    const navigator=useNavigate()
    React.useEffect(
        ()=>{
          getAllStudent().then(
            res=>{setMetaInfo(res.data)
            setLoading(false)
            }

          ).catch(err=>{alert('You are Not Authorized')
            navigator('/')
            localStorage.removeItem('token')
            localStorage.removeItem('currentUser')
            setLoading(false)
        })
        },[]
      )

    function sendList(){
        sendAbsent(outGoingAbsent).then(
            res=>{
                console.log(res.data)
            }
        )
        sendOnDuty(outGoingOnDuty).then(
            res=>{
                console.log(res.data)
                
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
        } )
    }
    function isSelected(student,type){
        return type==='absent'?selectedAbsent.has(student):
        selectedOnDuty.has(student)
    }
// Sort metaInfo based on regNo
const sortedMetaInfo = [...metaInfo].sort((a, b) => a.regNo - b.regNo);

sortedMetaInfo.map((info) => {
    const i = info.regNo;
    const j=info.studentName;
    studentsNumbers.push(
        <div
            key={i}
            className={`card p-3 mt-2 ${isSelected(i,'absent') ? 'bg-success text-light' : isSelected(i,'onDuty') ? 'bg-primary text-light' : 'text-dark'}`}
            >
             <h6>{j}</h6>
             {i }
            <div className="">
                <button onClick={() => setselectedStudent(i, selectedAbsent, setSelectedAbsent)} className="btn me-2 mt-2 btn-sm btn-warning">
                    Absent
                </button>
                <button onClick={() => setselectedStudent(i, selectedOnDuty, setSelectedOnDuty)} className="btn btn-sm mt-2 btn-warning">
                    OnDuty
                </button>
            </div>
        </div>
    );
});


    function handleParent(){
        setSending(true)
        sendMessage(outGoingAbsent).then(
            res=>{alert(res.data)
            setSending(false)}
        ).catch(err=>{alert("Something Went Wrong")
            setSending(false)
        })
        
    }

    return (
        <>
        <div  className='card p-5 m-2'>
            <div className="row justify-content-around">
                <div className=" col-md-2 mb-3">
                    <p className='fw-bolder p-2 mb-2'>Tools</p>
                    <button data-bs-toggle='modal' data-bs-target='#SearchByDate' className="btn me-3 mt-2 btn-info text-light">By Date 
                    <i className="bi ms-2 bi-calendar-fill"></i>
                     </button>
                     <AbsentByDateModal />
                    
                    <button data-bs-toggle='modal' data-bs-target='#SearchByHour' className="btn me-3 mt-2 btn-info text-light">By Hour
                    <i className="bi bi-clock-fill  ms-2"></i>
                    </button>
                    <AbsentByHour />
                    <div style={{position:'relative'}} className="notify-btn">
                        <button  onClick={handleParent} className={`btn me-3 notify-btn mt-2 btn-info text-light ${sending?"disabled":''}`}>Notify Parent
                            <i className="bi bi-whatsapp  ms-2"></i>
                        </button>
                            <p  className=' tool-tip py-2 d-block text-light rounded-5 px-3' >This only sends the absentees to parent if you have onDuty on your list after sending this click submit again</p>
                    </div>
                    
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
                        <div className=" col-md-2">
                            <button onClick={sendList} className="btn mb-3 btn-primary btn-sm my-2">Submit</button>
                        </div>
                    </div>
                </div>
                
            </div>
            
            {studentsNumbers}{loading&&<div className='d-flex align-items-center flex-column'><img width={700} height={700} className='img-fluid' src={loadingImg}/><p className='text-center fw-bolder'>Please wait while Loading...</p></div>}
        </div>
        
        </>
        
    );
}

export default AbsentMarkdown;
