import axios from "axios";

const Baseurl="http://43.205.8.40:8080/"

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