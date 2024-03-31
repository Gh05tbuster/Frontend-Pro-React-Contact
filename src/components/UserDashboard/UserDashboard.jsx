import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Users from '../Users/Users';
import Albums from '../Albums/Albums';
import Photos from '../Photos/Photos';

const UserDashboard = () => {
  return (
      <Switch>
        {/* <Route path="/users"> <Users /> </Route>
        <Route path="/albums/:userId"> <Albums /> </Route>
        <Route path="/photos/:albumId"> <Photos /> </Route> */}
        
        <Route path="/users" component={Users} />
        <Route path="/albums" component={Albums} />
        <Route path="/photos" component={Photos} />
        <Route path='/'> <Users /> </Route>
      </Switch>
  );
};

export default UserDashboard;
