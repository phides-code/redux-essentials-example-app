import React from 'react';
import { useDispatch } from 'react-redux';
import { reactionAdded } from './postsSlice';

const reactionEmoji = {
    thumbsUp: '👍',
    hooray: '🎉',
    heart: '❤️',
    rocket: '🚀',
    eyes: '👀',
};

export const ReactionButtons = ({ post }) => {
    const dispatch = useDispatch();

    const onReactionClick = (reactionName) => {
        dispatch(
            reactionAdded({
                postId: post.id,
                reaction: reactionName,
            })
        );
    };

    const reactionButtons = Object.entries(reactionEmoji).map(
        ([name, emoji]) => {
            return (
                <button
                    onClick={() => {
                        onReactionClick(name);
                    }}
                    key={name}
                    type='button'
                    className='muted-button reaction-button'
                >
                    {emoji} {post.reactions[name]}
                </button>
            );
        }
    );

    return <div>{reactionButtons}</div>;
};
