import { useEffect, useRef, useState } from "react";
import { FaTelegram } from "react-icons/fa";
import { HiOutlineChatAlt2 } from "react-icons/hi";
import { PiHeadsetBold, PiXBold } from "react-icons/pi";
import { TELEGRAM_USERNAME } from "../../utils/constants";
import FeedbackModal from "../feedback/FeedbackModal";

function SupportWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
  const widgetRef = useRef(null);

  // بستن منو با کلیک بیرون
  useEffect(() => {
    function handleClickOutside(e) {
      if (widgetRef.current && !widgetRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // بستن منو با کلید Escape
  useEffect(() => {
    function handleEscape(e) {
      if (e.key === "Escape") setIsOpen(false);
    }

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <>
      <div className="support-widget" ref={widgetRef}>
        {isOpen && (
          <div className="support-widget__panel">
            <span className="support-widget__panel-title">
              چطور می‌تونیم کمکت کنیم؟
            </span>

            <a
              href={`https://t.me/${TELEGRAM_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className="support-widget__item support-widget__item--telegram"
              onClick={() => setIsOpen(false)}
            >
              <span className="support-widget__item-icon support-widget__item-icon--telegram">
                <FaTelegram size={18} />
              </span>
              <span className="support-widget__item-text">
                <strong>پشتیبانی تلگرام</strong>
                <small>پاسخ سریع توی چت</small>
              </span>
            </a>

            <button
              type="button"
              className="support-widget__item support-widget__item--site"
              onClick={() => {
                setIsFeedbackOpen(true);
                setIsOpen(false);
              }}
            >
              <span className="support-widget__item-icon support-widget__item-icon--site">
                <HiOutlineChatAlt2 size={18} />
              </span>
              <span className="support-widget__item-text">
                <strong>پیام از طریق سایت</strong>
                <small>پیامت رو مستقیم برامون بفرست</small>
              </span>
            </button>
          </div>
        )}

        <div
          className={`support-widget__trigger-wrap ${
            isOpen ? "support-widget__trigger-wrap--open" : ""
          }`}
        >
          <button
            type="button"
            className={`support-widget__trigger ${
              isOpen ? "support-widget__trigger--open" : ""
            }`}
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="پشتیبانی"
          >
            {isOpen ? <PiXBold size={24} /> : <PiHeadsetBold size={24} />}
          </button>
          <span className="support-widget__trigger-shadow" />
        </div>
      </div>

      <FeedbackModal
        isOpen={isFeedbackOpen}
        onClose={() => setIsFeedbackOpen(false)}
      />
    </>
  );
}

export default SupportWidget;