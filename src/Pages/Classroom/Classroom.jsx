import React from 'react'
import {useNavigate,useParams} from 'react-router-dom'
import {Dummydata} from './Dummydata'
import Folder from './Folder.webp'
import File from './Pdf.webp'

function Classroom() {
const {sem}=useParams()
const {sub}=useParams()

const file=Dummydata
     const navigator=useNavigate()

    function giveElements(doc){
        if(!sem){const keys=Object.keys(doc)
        return(keys.map(key=>
        <div key={key} onClick={()=>{navigator('/classroom/'+key)}} className="card align-items-center mx-3 p-3">
            <img className='img-fluid' src={Folder} width={'100px'}/>
            <p className='text-center fw-bolder'>{key}</p>
        </div>
        ))}

        if(sem&&!sub){
            const semester=file[0][sem]
            const keys=Object.keys(semester)
        return(keys.map(key=>
        <div key={key} onClick={()=>{navigator('/classroom/'+sem+'/'+key)}} className="card align-items-center mx-3  p-3">
            <img className='img-fluid' src={Folder} width={'100px'}/>
            <p className='text-center fw-bolder'>{key}</p>
        </div>
        ))
        }

        if(sub){
            const subjects=file[0][sem][sub]
            const files=subjects.map(file=>{
                return(
                    <div key={file.name} onClick={()=>{console.log('donwloading content...')}} className="card align-items-center mx-3 p-3">
                        <img className='img-fluid' src={File} width={'100px'}/>
                        <p className='text-center fw-bolder'>{file.name}</p>
                    </div>
                )
            })

            return files
        }
    }

    const semElements=file.map(e=>{
        return (giveElements(e))
    })
    
  return (
    <div>
        
        <div className="container mt-5 d-md-flex">
            {semElements}
        </div>
    </div>
  )
}

export default Classroom