'use client'
import React from 'react';
import About from "@/app/(sites)/anggota/detail/About";
import FriendCard from "@/app/(sites)/anggota/detail/FriendCard";
import ProfileCard from "@/app/(sites)/anggota/detail/ProfileCard";
import Experience from "@/app/(sites)/anggota/detail/Experience";

function Profile() {
  return (
    <div className="container mx-auto ">
      <div className=" p-2 sm:flex sm:gap-2">
        <div className="sm:w-fit w-full flex flex-col ">
          <ProfileCard/>
          <div className="my-2"></div>

        </div>

        <div className="w-full  flex flex-col  ">
          <About/>
          <div className="my-2"></div>
          <Experience/>
          <div className="my-2"></div>
          <FriendCard/>
        </div>
      </div>

    </div>)
}

export default Profile;
