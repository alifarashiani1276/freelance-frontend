import React, { useState } from "react";
import { FaTelegram } from "react-icons/fa";
import { HiOutlineChatAlt2 } from "react-icons/hi";
import FeedbackModal from "../feedback/FeedbackModal";
import { TELEGRAM_USERNAME } from "../../utils/constants";

function Founder() {
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);

  return (
    <section className="home-section home-founder">
      <div className="home-container">
        <div className="home-founder__card">
          <img
            src="/images/founder.png"
            alt="سازنده‌ی کارجو"
            className="home-founder__avatar"
          />
          <div className="home-founder__content">
            <span className="home-founder__badge">سازنده‌ی این پلتفرم</span>
            <h3 className="home-founder__name">علی فراشیانی</h3>
            <p className="home-founder__bio">
              سلام 👋 این پلتفرم رو با هدف ساده‌تر کردن ارتباط بین کارفرماها و
              فریلنسرهای ایرانی طراحی و توسعه دادم. اگه سوالی داشتی یا پیشنهادی
              برای بهتر شدنش، خوشحال می‌شم بشنوم.
            </p>

            <div className="home-founder__contact">
              <a
                href={`https://t.me/${TELEGRAM_USERNAME}`}
                target="_blank"
                rel="noopener noreferrer"
                className="home-founder__contact-link home-founder__contact-link--telegram"
              >
                <FaTelegram size={18} />
                پیام توی تلگرام بده
              </a>

              <button
                type="button"
                onClick={() => setIsFeedbackOpen(true)}
                className="home-founder__contact-link home-founder__contact-link--feedback"
              >
                <HiOutlineChatAlt2 size={18} />
                نظرت رو برام بنویس
              </button>
            </div>
          </div>
        </div>
      </div>

      <FeedbackModal
        isOpen={isFeedbackOpen}
        onClose={() => setIsFeedbackOpen(false)}
      />
    </section>
  );
}

export default Founder;
