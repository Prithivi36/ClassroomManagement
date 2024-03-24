import React from 'react'
import {useNavigate,useParams} from 'react-router-dom'
import {Dummydata} from './Dummydata'
import Folder from './Folder.webp'
import File from './Pdf.webp'

function Classroom() {
const {semester}=useParams()
const {sub}=useParams()

const file=Object.keys(Dummydata)
     const navigator=useNavigate()

let semElements;
    if(!semester){
        semElements=file.map((sem)=>{
        return(
            <div key={sem} onClick={()=>{navigator('/classroom/'+sem)}} className="card align-items-center mx-3 p-3">
                <img className='img-fluid' src={Folder} width={'100px'}/>
                <p className='text-center fw-bolder'>{sem}</p>
            </div>
        )})
    }
    else if(semester&&!sub){
        const subjects=Object.keys(Dummydata[semester])
        semElements= (subjects.map((subjects)=>{
            return(
                <div key={subjects} onClick={()=>{navigator('/classroom/'+semester+'/'+subjects)}} className="card align-items-center mx-3 p-3">
                    <img className='img-fluid' src={Folder} width={'100px'}/>
                    <p className='text-center fw-bolder'>{subjects}</p>
                </div>
            )
        }))
    }
    else if(semester&&sub){
        const files=(Dummydata[semester][sub])
        semElements= (files.map((file)=>{
            return(
                <div key={file.name} onClick={()=>console.log('downloading...')} className="card align-items-center mx-3 p-3">
                    <img className='img-fluid' src={File} width={'100px'}/>
                     <p className='text-center fw-bolder'>{file.name}</p>
                 </div>
             )
         }))
    }

    



    
  return (
    <div>
        
        <div className="container mt-5 d-md-flex">
            {semElements}
        </div>
    </div>
  )
}

export default Classroom