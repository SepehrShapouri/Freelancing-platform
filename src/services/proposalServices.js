import http from "./httpServices";

export function getAllProposalApi(){
    return http
    .get("/proposal/lisy")
    .then(({data})=>data.data)
}