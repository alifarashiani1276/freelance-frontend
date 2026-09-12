import React from "react";
import AppLayout from "../../ui/AppLayout";
import SideBar, { CustomNavLink } from "../../ui/SideBar";
import {
  HiOutlineViewGrid,
  HiOutlineUsers,
  HiOutlineFolder,
  HiOutlineClipboardList,
  HiOutlineUserCircle,
  HiOutlineClock,
  HiOutlineChatAlt2,
} from "react-icons/hi";
function AdminLayout() {
  return (
    <AppLayout>
      <SideBar>
        <CustomNavLink to="dashboard">
          <HiOutlineViewGrid size={20} />
          <span>داشبورد</span>
        </CustomNavLink>

        <CustomNavLink to="users">
          <HiOutlineUsers size={20} />
          <span>کاربران</span>
        </CustomNavLink>

        <CustomNavLink to="projects">
          <HiOutlineFolder size={20} />
          <span>پروژه‌ها</span>
        </CustomNavLink>

        <CustomNavLink to="proposals">
          <HiOutlineClipboardList size={20} />
          <span>درخواست‌ها</span>
        </CustomNavLink>

        <CustomNavLink to="activity">
          <HiOutlineClock size={20} />
          <span>سابقه</span>
        </CustomNavLink>

        <CustomNavLink to="feedback">
          <HiOutlineChatAlt2 size={20} />
          <span>نظرات کاربران</span>
        </CustomNavLink>

        <CustomNavLink to="profile">
          <HiOutlineUserCircle size={20} />
          <span>پروفایل</span>
        </CustomNavLink>
      </SideBar>
    </AppLayout>
  );
}

export default AdminLayout;
