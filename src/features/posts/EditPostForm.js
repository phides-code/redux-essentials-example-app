import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { postUpdated, selectPostById } from './postsSlice';

export const EditPostForm = ({ match }) => {
    const { postId } = match.params;

    const post = useSelector((state) => selectPostById(state, postId));
    const [title, setTitle] = useState(post.title);
    const [content, setContent] = useState(post.content);
    const dispatch = useDispatch();
    const history = useHistory();

    const onTitleChanged = (e) => setTitle(e.target.value);
    const onContentChanged = (e) => setContent(e.target.value);

    const savePost = () => {
        if (title && content) {
            dispatch(
                postUpdated({
                    id: postId,
                    title,
                    content,
                })
            );

            history.push(`/posts/${postId}`);
        }
    };

    console.log('editing post ' + postId);
    console.log(post);

    return (
        <section>
            <h2>Edit Post</h2>
            <form>
                <label htmlFor='postTitle'>Post Title: </label>
                <input
                    type='text'
                    id='postTitle'
                    name='postTitle'
                    value={title}
                    onChange={onTitleChanged}
                />
                <label htmlFor='postContent'>Content:</label>
                <textarea
                    id='postContent'
                    name='postContent'
                    value={content}
                    onChange={onContentChanged}
                />
                <button type='button' onClick={savePost}>
                    Save Post
                </button>
            </form>
        </section>
    );
};
