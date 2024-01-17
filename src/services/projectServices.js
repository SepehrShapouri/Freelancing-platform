import http from "./httpServices";
export default function getOwnerProjectsApi(){
    return http.get('/project/owner-projects').then(({data})=>data.data)
}