import React from 'react';
import classes from "./MyPosts.module.css";

function MyPosts ()  {
    return (
        <div>
            <div>
                My post
            </div>
            <div>
                New post
            </div>
            <div className={classes.posts}>
                <div className={classes.item}>
                    post1
                </div>
                <div className='item'>
                    post2
                </div>
                <div className='item'>
                    post3
                </div>
            </div>
        </div>
    );
};

export default MyPosts;