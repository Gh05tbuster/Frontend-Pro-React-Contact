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
        {/* <Route path="/users">
          <Users updateCurrentUserId={updateCurrentUserId} />
        </Route>
        <Route path={`/${currentUserId}/albums`}>
          <Albums />
        </Route>
        <Route path="/photos/:albumId">
          <Photos />
        </Route> */}

        <Route
          path="/users"
          element={<Users updateCurrentUserId={updateCurrentUserId} />}
        />
        <Route path="/:userId/albums" element={<Albums />} />
        <Route path="/:albumId/photos" element={<Photos />} />
        <Route path="/" element={<Users />} />
        {/* <Route path="/">
          <Users />
        </Route> */}
      </Routes>
    </>
  );
};

export default UserDashboard;
