import http from "./httpServices";
export default function getOwnerProjectsApi(){
    return http.get('/projects/owner-projects').then(({data})=>data.data)
}