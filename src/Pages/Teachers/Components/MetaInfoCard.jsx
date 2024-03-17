import React from 'react'
import { getAllStudent } from '../../../Api/StudentApi'

function MetaInfoCard() {

  const [metaInfo,setMetaInfo]=React.useState([])

  React.useEffect(
    ()=>{
      getAllStudent().then(
        res=>setMetaInfo(res.data)
      )
    },[]
  )

  const metaCards=metaInfo.map((info)=>{
    return(
      <div key={info.id} onClick={()=>window.location.href = '/student/'+info.regNo} className="card flex-row px-3 py-3">
        <table>
          <tbody>
            <tr>
              <td className='fw-bolder'>Name</td>
              <td>{info.studentName}</td>
            </tr>
            <tr>
              <td className='fw-bolder'>Reg.No</td>
              <td>{info.regNo}</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  })

  return (
    <>
    {metaCards}
    </>
  )
}

export default MetaInfoCard