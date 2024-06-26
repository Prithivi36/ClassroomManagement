import axios from "axios";


// export const Baseurl="https://jlrb0yk4t8.execute-api.ap-south-1.amazonaws.com/VCR-Stage/"
export const Baseurl="http://65.0.7.62:8080/"
// export const Baseurl="http://localhost:8080/"




axios.interceptors.request.use(function(config){
    config.headers['Authorization']=localStorage.getItem("token")
    return config;
})

export function getAllStudent(){
    return axios.get(Baseurl+'student/getAll')
}
export function getStudent(number){
    return axios.get(Baseurl+"student/get/"+number)
}

export function getStudentAbsent(number){
    return axios.get(Baseurl+'student/ab/'+number)
}
export function getStudentOnDuty(number){
    return axios.get(Baseurl+'student/od/'+number)
}
export function getAllLeaveRequest(){
    return axios.get(Baseurl+'request/all')
}
export function postRequest(req){
    return axios.post(Baseurl+'request/raise',req)
}

export function changeStatus(reg){
    return axios.patch(Baseurl+'request/toggle/'+reg)
}
export function deleteStatus(reg){
    return axios.delete(Baseurl+'request/del/'+reg)
}

export function sendStudent(detail){
    return axios.post(Baseurl+'student/new',detail)
}

export function sendAbsent(outlist){
    return axios.post(Baseurl+'absent/send',outlist)
}

export function sendOnDuty(outList){
    return axios.post(Baseurl+'onduty/send',outList)
}
export function meritIncrease(regNo){
    return axios.patch(Baseurl+'student/merit/inc/'+regNo)
}
export function meritDecrease(regNo){
    return axios.patch(Baseurl+'student/merit/dec/'+regNo)
}

export function getAbsents(date){
    return axios.get(Baseurl+'absent/on/'+date)
}
export function getAbsentsByHour(date,hour){
    return axios.get(Baseurl+'absent/on/'+date+'/'+hour)
}
export function getods(date){
    return axios.get(Baseurl+'onduty/on/'+date)
}
export function getLeaveRequestByDate(id,date){
    return axios.get(Baseurl+'request/get/'+id+'/'+date)
}
export function postSkills(id,skill){
    return axios.post(`${Baseurl}student/skill/add/${id}/${skill}`)
}
export function getStudentBySkill(skill){
    return axios.get(Baseurl+'skills/'+skill)
}
export function sendFiles(formData,semDetail,subjectDetail){
    return  axios.post(Baseurl+'upload/'+semDetail+'/'+subjectDetail,formData
    , {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    )
}
export function getFiles(semDetail,subjectDetail){
    return  axios.get(Baseurl+'files/'+semDetail+'/'+subjectDetail)
}
export function downloadFiles(semDetail,subjectDetail,File){
    return  axios.get(Baseurl+'download/'+semDetail+'/'+subjectDetail+'/'+File)
}

export function registerStudent(studentInfo){
    return axios.post(Baseurl+'auth/register/student',studentInfo)
}

export function loginStudent(studentInfo ,roles){
    axios.post(Baseurl+'auth/get',studentInfo)
    .then(res=>{
        localStorage.setItem('token',"Bearer "+res.data)
        localStorage.setItem('currentUser', JSON.stringify({ username: studentInfo.username, roleInfo: roles?roles:'student' }))
        roles==='absent'?location.href='/#/absent':
        roles==='admin'?location.href='/#/adminPanel':
        roles==='teachers'?location.href='/#/teachers/'+studentInfo.username:location.href='/#/student/'+studentInfo.username

    }).catch(
        err=>alert(err.response.data.message||'Invalid Password')
    )
}

export function registerteacher(userDetails){
    return axios.post(Baseurl+'auth/register/teacher',userDetails)
}
export function registerRep(userDetails){
    return axios.put(Baseurl+'auth/register/rep/'+userDetails)
}

export function resetPassword(resetInfo){
    return axios.post(Baseurl+'reset',resetInfo)
}
export function sendMessage(outlist){
    return axios.post(Baseurl+'message',outlist)
}