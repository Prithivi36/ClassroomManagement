import axios from "axios";

const Baseurl="http://localhost:8080/"

export function getAllStudent(){
    return axios.get(Baseurl+'student/getAll')
}