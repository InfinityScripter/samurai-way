import React from 'react';
import classes from './Profile.module.css'

const Profile = () => {
    return (

        <div className={classes.content}>
            <div>
                <img src="house.jpg" alt=""/>
            </div>
            <div className={classes.content_avatar}>
                <img src="avatar.png" alt=""/>
            </div>
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

export default Profile;