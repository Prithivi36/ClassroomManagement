import React from 'react'
import {useNavigate,useParams} from 'react-router-dom'
import {Dummydata} from './Dummydata'
import Folder from './Folder.webp'
import File from './Pdf.webp'
import { downloadFiles, getFiles,Baseurl } from '../../Api/StudentApi'

function Classroom() {
const {semester}=useParams()
const {sub}=useParams()
const [filesData,setFilesData]=React.useState([])

const file=Object.keys(Dummydata)
     const navigator=useNavigate()

     React.useEffect(
        ()=>{
     getFiles(semester,sub).then(res=>setFilesData(res.data)).catch(err=>alert(err.response.data.message))
        },[semester,sub]
     )

let semElements;
    if(!semester){
        semElements=file.map((sem)=>{
        return(
            <div key={sem} onClick={()=>{navigator('/classroom/'+sem)}} className="card col-md-3  col-lg-2 mb-2 align-items-center mx-3 p-3">
                <img className='img-fluid' src={Folder} width={'100px'}/>
                <p className='text-center fw-bolder'>{sem}</p>
            </div>
        )})
    }
    else if(semester&&!sub){
        const subjects=Object.keys(Dummydata[semester])
        semElements= (subjects.map((subjects)=>{
            return(
                <div key={subjects} onClick={()=>{navigator('/classroom/'+semester+'/'+subjects)}} className="card col-md-3  col-lg-2 mb-2 align-items-center mx-3 p-3">
                    <img className='img-fluid' src={Folder} width={'100px'}/>
                    <p className='text-center fw-bolder'>{subjects}</p>
                </div>
            )
        }))
    }
    else if(semester&&sub){
        semElements= (filesData.map((file)=>{
            return(
                <a target='_blank' href={`${Baseurl}download/${semester}/${sub}/${file}`} key={file}  className="card align-items-center mx-3 p-3">
                    <img className='img-fluid' src={File} width={'100px'}/>
                     <p className='text-center fw-bolder'>{file}</p>
                 </a>
             )
         }))
    }
 
  return (

        <div className="d-flex justify-content-center align-items-center">
            <div className="container justify-content-center mt-5 row">
            {semElements}
            </div>
        </div>

  )
}

export default Classroom