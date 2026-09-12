import { useState } from "react";
import Modal from "../../ui/Modal";
import useCreateFeedback from "./useCreateFeedback";

function FeedbackModal({ isOpen, onClose }) {
  const { sendFeedback, isSending } = useCreateFeedback();
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!message.trim()) return;

    sendFeedback(
      { message },
      {
        onSuccess: () => {
          setMessage("");
          onClose();
        },
      },
    );
  }

  return (
    <Modal title="نظر یا پیشنهادت رو بنویس" isOpen={isOpen} onClose={onClose}>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="field-label">پیام شما</label>
          <textarea
            className="textField__input"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="هرچی دوست داری بهم بگو..."
          />
        </div>
        <button
          type="submit"
          disabled={isSending}
          className="btn btn--primary btn--sm"
        >
          {isSending ? "در حال ارسال..." : "ارسال نظر"}
        </button>
      </form>
    </Modal>
  );
}

export default FeedbackModal;
