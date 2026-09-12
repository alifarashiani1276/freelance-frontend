import React, { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import useReplyFeedback from "./useReplyFeedback";

function ReplyFeedbackForm({ feedback, onClose }) {
  const [adminReply, setAdminReply] = useState(feedback?.adminReply || "");
  const { replyFeedback, isReplying } = useReplyFeedback();
  const queryClient = useQueryClient();

  function handleSubmit(e) {
    e.preventDefault();
    if (!adminReply.trim()) return;

    replyFeedback(
      { feedbackId: feedback._id, adminReply },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ["admin-feedbacks"] });
          onClose();
        },
      },
    );
  }

  return (
    <div>
      <div className="feedback-reply-form__original">
        <span className="field-label">متن نظر کاربر</span>
        <p className="feedback-card__message">{feedback.message}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 mt-4">
        <div>
          <label className="field-label">پاسخ شما</label>
          <textarea
            className="textField__input"
            rows={4}
            value={adminReply}
            onChange={(e) => setAdminReply(e.target.value)}
            placeholder="پاسخت رو اینجا بنویس..."
          />
        </div>
        <button
          type="submit"
          disabled={isReplying}
          className="btn btn--primary btn--sm"
        >
          {isReplying ? "در حال ارسال..." : "ثبت پاسخ"}
        </button>
      </form>
    </div>
  );
}

export default ReplyFeedbackForm;
