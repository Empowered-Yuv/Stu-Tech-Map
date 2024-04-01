import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';

export default function OnlyMentorPrivateRoute() {
  const { currentUser } = useSelector((state) => state.user);
  return currentUser && currentUser.isMentor ? (
    <Outlet />
  ) : (
    <Navigate to='/sign-in' />
  );
}