import React from 'react'
import { getStudentOnDuty } from '../../../../Api/StudentApi'

function OndutyTable() {
    const [onDutyList,setonDutyList]=React.useState([])

    React.useEffect(
        ()=>{
            getStudentOnDuty(localStorage.getItem('currentUser')).then(
                res=>setonDutyList(res.data)
            )
        },[]
    )

    const rows=onDutyList.map((day)=>{
        return(
            <tr key={day.id} >
                    <td>{day.id}</td>
                    <td>{day.date}</td>
            </tr>
        )
    })

  return (
    <>
    <div className="tab-pane fade" id="onDuty">
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

export default OndutyTable