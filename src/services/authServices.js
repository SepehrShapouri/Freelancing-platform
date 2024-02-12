import { useEffect } from "react";
import http from "./httpServices";

export function getOtp(data) {
  return http.post("/user/get-otp", data).then(({ data }) => data.data);
}
export function checkOtp(data) {
  return http.post("/user/check-otp", data).then(({ data }) => data.data);
}
export function completeProfile(data) {
  return http
    .post("/user/complete-profile", data)
    .then(({ data }) => data.data);
}
export function getUser() {
  return http.get("/user/profile").then(({ data }) => data.data);
}
export function setAvatr(data) {
  return http.patch("/user/set-avatar", data).then(({ data }) => data.data);
}
export function userLogoutApi(){
  return http
  .post("/user/logout")
  .then(({data})=>data.data)
}
export function updateUserApi(data){
  return http.patch("/user/update",data).then(({data})=>data.data)
}