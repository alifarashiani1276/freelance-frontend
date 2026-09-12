import React from "react";
import FeedbackList from "../features/admin/feedback/FeedbackList";

function AdminFeedback() {
  return (
    <div>
      <h1
        className="text-xl font-bold mb-6"
        style={{ color: "rgb(var(--color-secondary-900))" }}
      >
        نظرات کاربران
      </h1>
      <FeedbackList />
    </div>
  );
}

export default AdminFeedback;
