import React from "react";
import AppLayout from "../../ui/AppLayout";
import SideBar, { CustomNavLink } from "../../ui/SideBar";
import {
  HiOutlineBriefcase,
  HiOutlineClock,
  HiOutlineDocumentText,
  HiOutlineHome,
  HiOutlineUserCircle,
  HiOutlineChatAlt2,
} from "react-icons/hi";

function FreelancerLayout() {
  return (
    <AppLayout>
      <SideBar>
        <CustomNavLink to="dashboard">
          <HiOutlineHome size={20} />
          <span>داشبورد</span>
        </CustomNavLink>

        <CustomNavLink to="projects">
          <HiOutlineBriefcase size={20} />
          <span>پروژه‌ها</span>
        </CustomNavLink>

        <CustomNavLink to="proposals">
          <HiOutlineDocumentText size={20} />
          <span>پروپوزال‌ها</span>
        </CustomNavLink>

        <CustomNavLink to="activity">
          <HiOutlineClock size={20} />
          <span>سابقه</span>
        </CustomNavLink>

        <CustomNavLink to="feedback">
          <HiOutlineChatAlt2 size={20} />
          <span>نظرات من</span>
        </CustomNavLink>

        <CustomNavLink to="profile">
          <HiOutlineUserCircle size={20} />
          <span>پروفایل</span>
        </CustomNavLink>
      </SideBar>
    </AppLayout>
  );
}

export default FreelancerLayout;