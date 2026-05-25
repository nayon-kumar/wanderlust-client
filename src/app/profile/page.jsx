import MyContainer from "@/components/Common/MyContainer";
import React from "react";

const ProfilePage = () => {
  return (
    <MyContainer className="pt-35 pb-20">
      <div className="text-center">
        <h3 className="text-[#0C0B0B] text-2xl font-semibold md:text-4xl">
          My Profile
        </h3>
        <p className="mt-4 text-[#6C696D] ">Manage and view your profile</p>
      </div>
    </MyContainer>
  );
};

export default ProfilePage;
