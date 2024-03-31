import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Users from "../Users/Users";
import Albums from "../Albums/Albums";
import Photos from "../Photos/Photos";

const UserDashboard = () => {
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
