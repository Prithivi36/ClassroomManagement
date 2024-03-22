import axios from "axios";

const Baseurl="http://192.168.1.3:8080/"

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