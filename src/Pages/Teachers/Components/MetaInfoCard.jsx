import React from 'react'
import { getAllStudent } from '../../../Api/StudentApi'
import { useNavigate } from 'react-router-dom'

function MetaInfoCard() {

  const [metaInfo,setMetaInfo]=React.useState([])
  const navigator=useNavigate()

  React.useEffect(
    ()=>{
      getAllStudent().then(
        res=>setMetaInfo(res.data)
      )
    },[]
  )

  const metaCards=metaInfo.map((info)=>{
    return(
      <div key={info.id} onClick={()=>navigator('/student/'+info.regNo)} className="card flex-row px-3 py-3">
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