import React from "react";
import MyFeedbackList from "../features/feedback/MyFeedbackList";

function MyFeedback() {
  return (
    <div>
      <div className="projects-header">
        <div>
          <h1 className="projects-header__title">نظرات من</h1>
          <p className="text-sm mt-1 text-secondary-400">
            نظراتی که برای ما ثبت کرده‌ای و پاسخ ادمین به آن‌ها
          </p>
        </div>
      </div>

      <div className="mt-6">
        <MyFeedbackList />
      </div>
    </div>
  );
}

export default MyFeedback;
