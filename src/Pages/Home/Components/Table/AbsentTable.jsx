import React from 'react'
import { getStudentAbsent } from '../../../../Api/StudentApi'
import { useParams } from 'react-router-dom'

function AbsentTable(props) {

    const [absentList,setAbsentList]=React.useState([])
    const {id}=useParams()
    React.useEffect(
        ()=>{
            getStudentAbsent(id).then(
                res=>setAbsentList(res.data)
            )
        },[]
    )
    const rows=absentList.map((day)=>{
        return(
            <tr key={day.id} >
                    <td>{day.id}</td>
                    <td>{day.date}</td>
            </tr>
        )
    })
  return (
    <>
     <div className="tab-pane fade show active" id="attendance">
        <table className='table table-bordered mt-2'>
            <thead>
                <tr className='table-dark'>
                    <td>Id</td>
                    <td>Date</td>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    </div>   
    </>
  )
}

export default AbsentTable