import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

//import { useEffect, useState } from 'react';

const RequireAuth = ({ allowedRoles }) => {
  const { user } = useSelector((state) => ({ ...state }));

  // const [useInTheState, setUserInTheState] = useState(['']);

  // useEffect(() => {
  //   if (user && user.token) {
  //     useInTheState.push(user.role);
  //     console.log(useInTheState);
  //   } else {
  //     console.log('nothong to see');
  //   }
  // }, [user]);

  //const [user, setUser] = useState(true);

  const location = useLocation();

  return allowedRoles.find((role) => user && user.role.includes(role)) ? (
    <Outlet />
  ) : user && user?.token ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <h1>go to login please</h1>
  );
};

export default RequireAuth;
