# فریلنسری | Freelancery — Frontend

> A modern, RTL freelancing marketplace platform (like Upwork) connecting clients ("Owners") with freelancers — built with React, Vite and Tailwind CSS.

<p align="center">
  <img alt="React" src="https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black" />
  <img alt="Vite" src="https://img.shields.io/badge/Vite-4-646CFF?logo=vite&logoColor=white" />
  <img alt="Tailwind CSS" src="https://img.shields.io/badge/TailwindCSS-3-06B6D4?logo=tailwindcss&logoColor=white" />
  <img alt="React Query" src="https://img.shields.io/badge/TanStack%20Query-5-FF4154?logo=reactquery&logoColor=white" />
  <img alt="License" src="https://img.shields.io/badge/license-MIT-green" />
</p>

---

## 🇬🇧 English

### Overview

**Freelancery** is the client-side application of a full-stack freelancing marketplace. It connects **Clients (Owners)** who post projects with **Freelancers** who submit proposals, with a dedicated **Admin** panel for platform moderation. The UI is fully **RTL (Persian)** and built to feel like a modern, production-grade SaaS product.

### ✨ Key Features

- 🔐 **Phone/OTP authentication** (no password required) with protected, role-based routing
- 👤 Three roles: **Owner (Client)**, **Freelancer**, **Admin** — each with its own dashboard
- 📁 Project posting, browsing and detail pages, with category-based organization
- 📝 Proposal submission & review flow between owners and freelancers
- 🌗 Light / Dark mode
- 📱 Fully responsive layout (desktop, tablet, mobile)
- ⚡ Data fetching & caching with **TanStack (React) Query**
- 🎨 Unified, token-based design system built with **Tailwind CSS**

### 🛠 Tech Stack

| Category         | Technology                                   |
| ----------------- | --------------------------------------------- |
| Framework         | React 18 + Vite                               |
| Styling            | Tailwind CSS 3, CSS variables (design tokens) |
| Routing            | React Router DOM v7                           |
| Server state       | TanStack React Query v5                       |
| Forms              | React Hook Form                                |
| HTTP client        | Axios                                          |
| Icons              | react-icons                                    |
| Notifications      | react-hot-toast                                |
| Misc UI            | Headless UI, react-multi-date-picker, react-otp-input |

### 📦 Prerequisites

- [Node.js](https://nodejs.org/) v18 or newer
- npm (comes with Node.js)
- A running instance of the [backend API](../freelnacer-app-backend-1) (or its deployed URL)

### 🚀 Getting Started

```bash
# 1. Clone the repository
git clone https://github.com/<your-username>/freelancery-frontend.git
cd freelancery-frontend

# 2. Install dependencies
npm install

# 3. Create your environment file
cp .env.example .env.development.local
# then edit it and set VITE_BASE_URL to your backend URL

# 4. Run the development server
npm run dev
```

The app will be available at `http://localhost:5173` (default Vite port).

### ⚙️ Environment Variables

| Variable         | Description                                   | Example                          |
| ----------------- | ---------------------------------------------- | --------------------------------- |
| `VITE_BASE_URL`   | Base URL of the backend REST API               | `http://localhost:5000/api`       |

> See `.env.example` for a reference file.

### 📜 Available Scripts

| Command           | Description                              |
| ------------------ | ----------------------------------------- |
| `npm run dev`       | Start the Vite development server        |
| `npm run build`     | Build the app for production              |
| `npm run preview`   | Preview the production build locally      |
| `npm run lint`      | Run ESLint across the project             |

### 📁 Project Structure

```
src/
├── features/         # Domain features (authentication, owner, freelancer, admin ...)
├── pages/             # Route-level page components
├── ui/                # Shared/reusable UI components (Header, SideBar, Loading ...)
├── hooks/             # Reusable custom hooks
├── services/          # API service layer (axios calls)
├── context/           # React context providers
├── utils/             # Helper functions & constants
└── index.css          # Design tokens (CSS variables) & Tailwind layers
```

### 🗺 Roadmap / Ideas

- [ ] Public project search & filtering
- [ ] In-app messaging between owner and freelancer
- [ ] Online payment integration

### 🤝 Contributing

Issues and pull requests are welcome. Please open an issue first to discuss what you would like to change.

### 📄 License

This project is licensed under the MIT License.

---

## 🇮🇷 فارسی

### معرفی پروژه

**فریلنسری** بخش فرانت‌اند یک پلتفرم فول‌استک بازار کار فریلنسری است. این پلتفرم **کارفرمایان** را که پروژه ثبت می‌کنند به **فریلنسرها** که پیشنهاد ارسال می‌کنند متصل می‌کند و یک پنل **ادمین** برای مدیریت پلتفرم دارد. رابط کاربری کاملاً **راست‌چین (فارسی)** است و با هدف داشتن ظاهری مدرن و حرفه‌ای مشابه یک محصول SaaS واقعی طراحی شده.

### ✨ ویژگی‌های کلیدی

- 🔐 احراز هویت با **شماره موبایل و کد یکبارمصرف (OTP)** بدون نیاز به رمز عبور
- 👤 سه نقش کاربری: **کارفرما**، **فریلنسر** و **ادمین**، هرکدام با داشبورد اختصاصی
- 📁 ثبت و مرور پروژه‌ها به همراه صفحه جزئیات و دسته‌بندی
- 📝 فرآیند ارسال و بررسی پیشنهاد (Proposal) بین کارفرما و فریلنسر
- 🌗 حالت روشن / تاریک
- 📱 طراحی کاملاً واکنش‌گرا (دسکتاپ، تبلت، موبایل)
- ⚡ مدیریت داده‌های سرور با **React Query**
- 🎨 Design System یکپارچه و مبتنی بر توکن با **Tailwind CSS**

### 🛠 تکنولوژی‌های استفاده‌شده

React 18، Vite، Tailwind CSS، React Router v7، TanStack React Query، React Hook Form، Axios، react-icons، react-hot-toast.

### 📦 پیش‌نیازها

- Node.js نسخه ۱۸ یا بالاتر
- npm
- سرور بک‌اند پروژه در حال اجرا (لینک ریپوی بک‌اند در بالا)

### 🚀 راه‌اندازی پروژه

```bash
# ۱. کلون کردن ریپازیتوری
git clone https://github.com/<your-username>/freelancery-frontend.git
cd freelancery-frontend

# ۲. نصب وابستگی‌ها
npm install

# ۳. ساخت فایل env
cp .env.example .env.development.local
# سپس مقدار VITE_BASE_URL را برابر آدرس بک‌اند خود قرار دهید

# ۴. اجرای سرور توسعه
npm run dev
```

پروژه روی آدرس `http://localhost:5173` در دسترس خواهد بود.

### ⚙️ متغیرهای محیطی

| متغیر            | توضیح                          | مثال                        |
| ----------------- | ------------------------------- | ---------------------------- |
| `VITE_BASE_URL`   | آدرس پایه API بک‌اند             | `http://localhost:5000/api`  |

### 📜 اسکریپت‌های موجود

- `npm run dev` — اجرای سرور توسعه
- `npm run build` — ساخت نسخه نهایی برای Production
- `npm run preview` — پیش‌نمایش نسخه Build شده
- `npm run lint` — اجرای ESLint

### 📁 ساختار پروژه

پوشه‌های اصلی: `features`، `pages`، `ui`، `hooks`، `services`، `context`، `utils` — توضیح کامل در بخش انگلیسی بالا آمده است.

### 📄 لایسنس

این پروژه تحت لایسنس MIT منتشر شده است.