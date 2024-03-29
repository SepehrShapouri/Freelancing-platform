import http from "./httpServices";
export default function getOwnerProjectsApi() {
  return http.get("/project/owner-projects").then(({ data }) => data.data);
}
export function deleteProjectApi(id) {
  return http.delete(`/project/${id}`).then(({ data }) => data.data);
}
export function createProjectApi(data) {
  return http.post("/project/add", data).then(({ data }) => data.data);
}
export function editProjectApi({ id, newProject }) {
  return http
    .patch(`/project/update/${id}`, newProject)
    .then(({ data }) => data.data);
}
export function toggelProjectStatusApi({ id, projectStatus }) {
  return http
    .patch(`/project/${id}`, projectStatus)
    .then(({ data }) => data.data);
}
export function getProjectByidApi(id) {
  return http.get(`/project/${id}`).then(({ data }) => data.data);
}
export function getAllProjects(){
  return http.get("/project/list").then(({data})=>data.data)
}