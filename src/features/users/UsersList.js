/**
 *We'll start by adding a new <UsersList> component. It follows the usual pattern of reading some data from the store with useSelector, and mapping over the array to show a list of users with links to their individual pages:
 */
import React from 'react';
// import { useEffect } from 'react';
import {
    // useDispatch,
    useSelector,
} from 'react-redux';
// import { Spinner } from '../../components/Spinner';
// import { fetchUsers } from './usersSlice';
import { selectAllUsers } from './usersSlice';
import { Link } from 'react-router-dom';

export const UsersList = () => {
    // const dispatch = useDispatch();
    const users = useSelector(selectAllUsers);

    // const userStatus = useSelector((state) => state.users.status);
    // const error = useSelector((state) => state.users.error);

    // useEffect(() => {
    //     if (userStatus === 'idle') {
    //         dispatch(fetchUsers());
    //     }
    // }, [userStatus, dispatch]);

    // let renderedUsers;

    // switch (userStatus) {
    //     case 'loading':
    //         content = <Spinner text='Loading...' />;
    //         break;
    //     case 'succeeded':
    //         content = users.map((user) => (
    //             <li>
    //                 <Link to={`/users/${user.id}`}>{user.name}</Link>
    //             </li>
    //         ));
    //         break;
    //     case 'failed':
    //         content = <div>{error}</div>;
    //         break;
    //     default:
    // }

    const renderedUsers = users.map((user) => (
        <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
        </li>
    ));

    return (
        <section>
            <h2>Users</h2>
            <ul>{renderedUsers}</ul>
        </section>
    );
};
