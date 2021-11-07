import React from 'react';
import { Routes as RouterDOM, Route } from 'react-router-dom';

import { AddProject, Dashboard, SignIn, SignUp } from '../pages';

export const AppRoutes: React.FC = () => {
  return (
    <RouterDOM>
      <Route path="/" element={<Dashboard />} />
      <Route path="add-project" element={<AddProject />} />
      <Route path="accounts/login" element={<SignIn />} />
      <Route path="accounts/signup" element={<SignUp />} />
    </RouterDOM>
  );
};
