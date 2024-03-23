import axios from "axios";

const Baseurl="http://localhost:8080/"

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
export function