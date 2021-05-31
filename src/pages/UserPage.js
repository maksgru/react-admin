import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../store/user';

const UserPage = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => ({
    user: state.users.user
  }));

  useEffect(() => {
    dispatch(getUser(1))
  });

  return (
    <h1>
      Here's user page!
      {user}
    </h1>
  );
};

export default UserPage;
