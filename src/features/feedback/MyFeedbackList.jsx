import React from "react";
import Loading from "../../ui/Loading";
import Empty from "../../ui/Empty";
import useMyFeedbacks from "./useMyFeedbacks";
import toLocalDateShort from "../../utils/toLocalDateShort";

const statusStyle = {
  PENDING: { label: "در انتظار پاسخ", className: "badge--secondary" },
  ANSWERED: { label: "پاسخ داده شد", className: "badge--success" },
};

function MyFeedbackList() {
  const { isLoading, isError, feedbacks } = useMyFeedbacks();

  if (isLoading) return <Loading />;

  if (isError) {
    return (
      <p className="dashboard-table__empty">دریافت نظرات با خطا مواجه شد.</p>
    );
  }

  if (!feedbacks?.length) return <Empty resourceName="نظری" />;

  return (
    <div className="feedback-list">
      {feedbacks.map((feedback) => {
        const status = statusStyle[feedback.status] ?? statusStyle.PENDING;
        return (
          <div className="feedback-card" key={feedback._id}>
            <div className="feedback-card__header">
              <span className={`badge ${status.className}`}>
                {status.label}
              </span>
              <span className="feedback-card__date">
                {toLocalDateShort(feedback.createdAt)}
              </span>
            </div>

            <p className="feedback-card__message">{feedback.message}</p>

            {feedback.adminReply ? (
              <div className="feedback-card__reply">
                <span className="feedback-card__reply-label">پاسخ ادمین</span>
                <p className="feedback-card__reply-text">
                  {feedback.adminReply}
                </p>
              </div>
            ) : (
              <p className="feedback-card__waiting">
                هنوز پاسخی برای این نظر ثبت نشده است.
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default MyFeedbackList;
