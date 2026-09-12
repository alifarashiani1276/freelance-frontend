import React, { useState } from "react";
import Loading from "../../../ui/Loading";
import Empty from "../../../ui/Empty";
import Modal from "../../../ui/Modal";
import useFeedbacks from "./useFeedbacks";
import ReplyFeedbackForm from "./ReplyFeedbackForm";
import toLocalDateShort from "../../../utils/toLocalDateShort";
import { HiOutlineChatAlt2 } from "react-icons/hi";

const statusStyle = {
  PENDING: { label: "در انتظار پاسخ", className: "badge--secondary" },
  ANSWERED: { label: "پاسخ داده شد", className: "badge--success" },
};

function FeedbackList() {
  const { isLoading, isError, feedbacks } = useFeedbacks();
  const [activeFeedback, setActiveFeedback] = useState(null);

  if (isLoading) return <Loading />;

  if (isError) {
    return (
      <p className="dashboard-table__empty">
        دریافت نظرات کاربران با خطا مواجه شد.
      </p>
    );
  }

  if (!feedbacks?.length) return <Empty resourceName="نظری" />;

  return (
    <div className="feedback-list">
      {feedbacks.map((feedback) => {
        const status = statusStyle[feedback.status] ?? statusStyle.PENDING;
        const submitterName =
          feedback.user?.name || feedback.name || "کاربر مهمان";

        return (
          <div className="feedback-card" key={feedback._id}>
            <div className="feedback-card__header">
              <div className="feedback-card__submitter">
                <strong>{submitterName}</strong>
                {(feedback.user?.email || feedback.phoneNumber) && (
                  <span className="feedback-card__submitter-meta">
                    {feedback.user?.email || feedback.phoneNumber}
                  </span>
                )}
              </div>
              <span className={`badge ${status.className}`}>
                {status.label}
              </span>
            </div>

            <span className="feedback-card__date">
              {toLocalDateShort(feedback.createdAt)}
            </span>

            <p className="feedback-card__message">{feedback.message}</p>

            {feedback.adminReply && (
              <div className="feedback-card__reply">
                <span className="feedback-card__reply-label">پاسخ ادمین</span>
                <p className="feedback-card__reply-text">
                  {feedback.adminReply}
                </p>
              </div>
            )}

            <button
              type="button"
              className="btn btn--primary btn--sm mt-3"
              onClick={() => setActiveFeedback(feedback)}
            >
              <HiOutlineChatAlt2 size={16} />
              {feedback.adminReply ? "ویرایش پاسخ" : "پاسخ دادن"}
            </button>
          </div>
        );
      })}

      <Modal
        title="پاسخ به نظر کاربر"
        isOpen={!!activeFeedback}
        onClose={() => setActiveFeedback(null)}
      >
        {activeFeedback && (
          <ReplyFeedbackForm
            feedback={activeFeedback}
            onClose={() => setActiveFeedback(null)}
          />
        )}
      </Modal>
    </div>
  );
}

export default FeedbackList;
