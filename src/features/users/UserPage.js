// And we'll add a <UserPage>, which is similar to our <SinglePostPage> in taking a userId parameter from the router:

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
    // selectAllPosts,
    selectPostsByUser,
} from '../posts/postsSlice';
import { selectUserById } from './usersSlice';

export const UserPage = ({ match }) => {
    const { userId } = match.params;

    const user = useSelector((state) => selectUserById(state, userId));

    // const postsForUser = useSelector((state) => {
    //     const allPosts = selectAllPosts(state);
    //     return allPosts.filter((post) => post.user === userId);
    // });

    const postsForUser = useSelector((state) =>
        selectPostsByUser(state, userId)
    );

    const postTitles = postsForUser.map((post) => (
        <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
        </li>
    ));

    if (!user) {
        return (
            <section>
                <h2>User not found</h2>
            </section>
        );
    }

    return (
        <section>
            <h2>{user.name}</h2>
            <ul>{postTitles}</ul>
        </section>
    );
};
