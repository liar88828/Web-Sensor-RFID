'use client'
import {enableCache, Icon} from "@iconify/react";
import React from "react";

enableCache('local');

export const SlideList = [
  {
    title: 'Home',
    icon: <Icon fontSize={24} icon="material-symbols:home-outline"/>,
    href: '/home',
  },
  {
    title: 'Dashboard',
    icon: <Icon fontSize={24} icon="material-symbols:dashboard-outline"/>,
    href: '/dashboard',
  },
  {
    title: 'User',
    icon: <Icon fontSize={24} icon="mdi:user-outline"/>,
    href: '/user',
  },
  {
    title: 'Anggota',
    icon: <Icon fontSize={24} icon="ic:baseline-people"/>,
    href: '/anggota',
  },
  {
    title: 'Sensor',
    icon: <Icon fontSize={24} icon="material-symbols-light:sensors-rounded"/>,
    href: '/sensor',
  },
  {
    title: 'Record',
    icon: <Icon fontSize={24} icon="bx:video-recording"/>,
    href: '/record',
  },

]
