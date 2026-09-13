import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineCreditCard,
  HiOutlineDocumentText,
  HiOutlineLightningBolt,
  HiOutlineSearch,
  HiOutlineShieldCheck,
  HiOutlineUser,
  HiOutlineUserGroup,
  HiOutlineBriefcase,
  HiOutlineSparkles,
} from "react-icons/hi";
import useUser from "../features/authentication/useUser";
import DarkModeToggle from "../ui/DarkModeToggle";
import { navigateByRole } from "../utils/navigateByRole";
import UserMenu from "../features/authentication/UserMenu";
import Founder from "../features/founder/Founder";
import SupportWidget from "../features/support/SupportWidget";

const HOW_IT_WORKS = [
  {
    icon: HiOutlineDocumentText,
    title: "ثبت پروژه یا رزومه",
    text: "کارفرما پروژه خود را با جزئیات ثبت می‌کند و فریلنسر پروفایل و نمونه‌کارهای خود را کامل می‌کند.",
    color: "#6366f1", // ایندیگو
  },
  {
    icon: HiOutlineUserGroup,
    title: "بررسی و انتخاب",
    text: "کارفرما پیشنهادهای دریافتی را بررسی می‌کند و بهترین فریلنسر را برای همکاری انتخاب می‌کند.",
    color: "#f59e0b", // کهربایی
  },
  {
    icon: HiOutlineShieldCheck,
    title: "همکاری امن",
    text: "کار در محیطی امن پیش می‌رود و تسویه‌حساب پس از تایید نهایی کارفرما انجام می‌شود.",
    color: "#10b981", // سبز زمردی
  },
];

const FEATURES = [
  {
    icon: HiOutlineShieldCheck,
    title: "پرداخت امن",
    text: "وجه پروژه تا تایید نهایی کارفرما نزد پلتفرم امانت می‌ماند.",
    color: "#10b981",
  },
  {
    icon: HiOutlineUserGroup,
    title: "فریلنسرهای احراز هویت‌شده",
    text: "پروفایل تمام فریلنسرها پیش از فعال‌سازی توسط تیم ما بررسی می‌شود.",
    color: "#6366f1",
  },
  {
    icon: HiOutlineLightningBolt,
    title: "مدیریت ساده پروژه",
    text: "پیشنهادها، پیام‌ها و وضعیت پروژه در یک داشبورد یکپارچه.",
    color: "#f59e0b",
  },
  {
    icon: HiOutlineCreditCard,
    title: "تسویه‌حساب شفاف",
    text: "تمام تراکنش‌ها با جزئیات کامل در پروفایل شما ثبت می‌شود.",
    color: "#8b5cf6", // بنفش
  },
];

function Home() {
  const navigate = useNavigate();
  const { isLoading, user } = useUser();
  const [activeTab, setActiveTab] = useState("owner");
  const OWNER_HIGHLIGHTS = [
    "پروژه‌ت رو در کمتر از ۲ دقیقه ثبت کن",
    "پیشنهادهای فریلنسرهای متخصص رو مقایسه کن",
    "پرداخت امن، فقط بعد از تایید نهایی کارت",
  ];

  const FREELANCER_HIGHLIGHTS = [
    "پروژه‌های متناسب با مهارتت رو پیدا کن",
    "مستقیم و بدون واسطه پیشنهاد قیمت بده",
    "سابقه و پروپوزال‌هات رو یک‌جا مدیریت کن",
  ];

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigate("/auth");
  };

  if (isLoading) {
    return (
      <div className="home-loading">
        <div className="home-loading__spinner" />
      </div>
    );
  }

  const toDashboard = () => {
    if (user?.role === "OWNER") {
      navigate("/owner");
    } else if (user?.role === "FREELANCER") {
      navigate("/freelancer");
    } else if (user?.role === "ADMIN") {
      navigate("/admin");
    }
  };

  function handleGoToDashboard() {
    if (user) {
      navigateByRole(user.role, navigate);
    } else {
      navigate("/auth");
    }
  }

  const  handleStartUser = ()=>{
    if(!user){
      navigate("/auth");
    }else{
      navigateByRole(user?.role, navigate)
    }
  }

  return (
    <div className="home">
      {/* ==================== Top Announcement Banner ==================== */}
      <button onClick={handleGoToDashboard} className="home-top-banner">
        <span className="home-top-banner__icon">
          <HiOutlineSparkles size={18} />
        </span>
        <span className="home-top-banner__text">
          کارفرما یا فریلنسرید؟ همین حالا وارد داشبورد خودتون بشید و شروع کنید
        </span>
        <HiOutlineArrowNarrowLeft
          size={16}
          className="home-top-banner__arrow"
        />
      </button>
      {/* ==================== Navbar ==================== */}
      <header className="home-navbar">
        <div className="home-navbar__container">
          {/* Brand */}
          <div className="home-brand">
            <img
              src="/images/logo2.png"
              alt="کارجو"
              className="home-brand__logo"
            />

            <span className="home-brand__name">کارجو</span>
          </div>

          {/* Navigation */}
          <nav className="home-navbar__nav">
            <a href="#how-it-works" className="home-navbar__link">
              چگونه کار می‌کند
            </a>

            <a href="#features" className="home-navbar__link">
              چرا فریلنسری
            </a>
          </nav>

          {/* Actions */}
          <div className="home-navbar__actions">
            <span className="inline-flex items-center rounded-full border border-amber-300 bg-amber-50 px-2 py-0.5 text-[11px] font-medium text-amber-700">
              نسخه آزمایشی
            </span>
            <DarkModeToggle />

            {user ? (
              <UserMenu user={user} />
            ) : (
              <div>
                <Link to="/auth" className="home-navbar__login">
                  ورود
                </Link>

                <Link to="/auth" className="home-navbar__signup">
                  ثبت‌نام رایگان
                </Link>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* ==================== Hero ==================== */}
      <section className="home-hero-section">
        <div className="home-hero">
          {/* Decorative Elements */}
          <div className="home-hero__decoration home-hero__decoration--left" />

          <div className="home-hero__decoration home-hero__decoration--right" />

          {/* Hero Content */}
          <div className="home-hero__content">
            <h1 className="home-hero__title">
              کارفرمایانی که به دنبال فریلنسر هستند
              <br />
              فریلنسرهایی که به دنبال پروژه‌اند
              <br />
              همه‌جا، یک‌جا: کارجو
            </h1>

            <p className="home-hero__description">
              فریلنسری یک پلتفرم مدرن برای اتصال کارفرمایان به فریلنسرهای متخصص
              است؛ از ثبت پروژه تا تسویه‌حساب امن، همه‌چیز در یک مسیر ساده.
            </p>
          </div>

          {/* Search Box */}
          <div className="home-showcase">
            <div className="home-showcase__tabs">
              <button
                type="button"
                onClick={() => setActiveTab("owner")}
                className={`home-showcase__tab ${
                  activeTab === "owner" ? "home-showcase__tab--active" : ""
                }`}
              >
                استخدام فریلنسر
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("freelancer")}
                className={`home-showcase__tab ${
                  activeTab === "freelancer" ? "home-showcase__tab--active" : ""
                }`}
              >
                پیدا کردن پروژه
              </button>
            </div>

            <ul className="home-showcase__list">
              {(activeTab === "owner"
                ? OWNER_HIGHLIGHTS
                : FREELANCER_HIGHLIGHTS
              ).map((item) => (
                <li key={item} className="home-showcase__item">
                  <span className="home-showcase__check">✓</span>
                  {item}
                </li>
              ))}
            </ul>

            <button
              onClick={() => handleStartUser()}
              className="home-showcase__cta"
            >
              همین حالا شروع کنید
              <HiOutlineArrowNarrowLeft size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* ==================== Features ==================== */}
      <section id="features" className="home-section home-features">
        <div className="home-container">
          {/* Section Header */}
          <div className="home-section-header">
            <h2 className="home-section-header__title">چرا فریلنسری؟</h2>

            <p className="home-section-header__description">
              هر آنچه برای یک همکاری حرفه‌ای بین کارفرما و فریلنسر لازم است، در
              یک پلتفرم یکپارچه.
            </p>
          </div>

          {/* Features Grid */}
          <div className="home-features__grid">
            {FEATURES.map(({ icon: Icon, title, text, color }) => (
              <div key={title} className="home-feature-card">
                <div
                  className="home-feature-card__icon"
                  style={{ color, background: `${color}1a` }}
                >
                  <Icon size={20} />
                </div>
                <h3 className="home-feature-card__title">{title}</h3>
                <p className="home-feature-card__text">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== How It Works ==================== */}
      <section id="how-it-works" className="home-section home-how">
        <div className="home-container">
          {/* Section Header */}
          <div className="home-section-header">
            <h2 className="home-section-header__title">چگونه کار می‌کند</h2>

            <p className="home-section-header__description">
              شروع کار روی فریلنسری، فقط سه گام ساده دارد.
            </p>
          </div>

          {/* Steps */}
          <div className="home-how__grid">
            {HOW_IT_WORKS.map(({ icon: Icon, title, text, color }, index) => (
              <div key={title} className="home-how__item">
                <div className="home-how__top">
                  <span
                    className="home-how__number"
                    style={{ background: color }}
                  >
                    {index + 1}
                  </span>
                  <Icon style={{ color }} size={20} />
                </div>
                <h3 className="home-how__title">{title}</h3>
                <p className="home-how__text">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Founder />

      {/* ==================== CTA ==================== */}
      <section className="home-cta-section">
        <div className="home-cta">
          <div className="home-cta__content">
            <h2 className="home-cta__title">همین امروز شروع کنید</h2>

            <p className="home-cta__description">
              ثبت‌نام رایگان است؛ چند دقیقه زمان لازم است تا پروفایل خود را کامل
              کنید و کار را شروع کنید.
            </p>
          </div>
          {user ? (
            <button
              onClick={() => navigateByRole(user?.role, navigate)}
              className="home-cta__button"
            >
              داشبورد
              <HiOutlineArrowNarrowLeft size={18} />
            </button>
          ) : (
            <button
              onClick={() => navigate("/auth")}
              className="home-cta__button"
            >
              ثبت‌نام رایگان
              <HiOutlineArrowNarrowLeft size={18} />
            </button>
          )}
        </div>
      </section>

      {/* ==================== Footer ==================== */}
      <footer className="home-footer">
        <div className="home-footer__container">
          <div className="home-footer__brand">
            <img
              src="/images/logo2.png"
              alt="کارجو"
              className="home-footer__logo"
            />

            <span className="home-footer__name">کارجو</span>
          </div>

          <p className="home-footer__copyright">
            © {new Date().getFullYear()} کارجو — تمام حقوق محفوظ است.
          </p>
        </div>
      </footer>

      <SupportWidget />
    </div>
  );
}

export default Home;
