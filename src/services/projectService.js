import http from "./httpService";

export function getOwnerProjectApi() {
  return http.get("project/owner-projects").then(({ data }) => data.data);
}

export function removeProjectAPi(id) {
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

export function changeProjectStatusApi(id, status) {
  return http.patch(`project/${id}`, { status }).then(({ data }) => data.data);
}

export function getProjectApi( id ) {
  return http.get(`project/${id}`).then(({ data }) => data.data);
}

export function getProjectsApi(params) {
  return http.get("project/list", { params }).then(({ data }) => data.data);
}