import React from "react";

const ProfileBadge = () => {
  return (
    <div className="rounded-full border-2 flex flex-row gap-2 py-2 px-4 items-center justify-center">
      <img
        src="https://i.pinimg.com/1200x/62/16/9f/62169fb4f961f71ff689f1d6a215dc6f.jpg"
        className="w-10 h-10  rounded-full ring-1 object-cover"
      />
      <div className="flex flex-col">
        <h6 className="font-bold">Abhishek Sisodiya</h6>
        <p className="text-xs">Admin</p>
      </div>
    </div>
  );
};

export default ProfileBadge;
