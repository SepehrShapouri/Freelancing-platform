import { Drama } from "lucide-react";
import http from "./httpServices";

export function getAllProposalApi() {
  return http.get("/proposal/list").then(({ data }) => data.data);
}
export function toggleProposalApi({id,status}) {
  return http.patch(`/proposal/${id}`,status).then(({ data }) => data.data);
}
export function addProposalApi(data){
  return http.post("/proposal/add",data).then(({data})=>data.data)
}