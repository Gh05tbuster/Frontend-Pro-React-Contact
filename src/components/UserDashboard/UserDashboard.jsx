import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Users from "../Users/Users";
import Albums from "../Albums/Albums";
import Photos from "../Photos/Photos";

const UserDashboard = () => {
  const [currentUserId, setCurrentUserId] = useState(0);
  const [isInit, setInit] = useState(false);

  const updateCurrentUserId = (id) => {
    setCurrentUserId(id);
  };

  useEffect(() => {
    setInit(true);
  }, []);

  useEffect(() => {
    if (isInit) console.log(currentUserId);
  }, [currentUserId]);

  return (
    <>
      <Routes>
        <Route path="/users" element={<Users />} />
        <Route path="/:userId/albums" element={<Albums />} />
        <Route path="/:userId/albums/:albumId" element={<Photos />} />
        <Route path="/" element={<Users />} />
      </Routes>
    </>
  );
};

export default UserDashboard;
