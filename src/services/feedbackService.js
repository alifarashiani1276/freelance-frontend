import http from "./httpService";

export function createFeedbackApi(data) {
  return http.post("/feedback/add", data).then(({ data }) => data.data);
}

// نظراتی که کاربر لاگین‌شده خودش ثبت کرده + پاسخ ادمین
export function getMyFeedbacksApi() {
  return http.get("/feedback/my").then(({ data }) => data.data);
}

// ADMIN
export function getAllFeedbacksApi(params) {
  return http
    .get("/admin/feedback/list", { params })
    .then(({ data }) => data.data);
}

export function replyFeedbackApi({ feedbackId, adminReply }) {
  return http
    .patch(`/admin/feedback/reply/${feedbackId}`, { adminReply })
    .then(({ data }) => data.data);
}