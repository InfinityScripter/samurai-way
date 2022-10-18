import React from 'react';
import classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import Post from "./Post/Post";

const Profile = () => {
    return (

        <div className={classes.content}>
            <div>
                <img src="house.jpg" alt=""/>
            </div>
            <Post message='Hello' likes='12'/>
            <Post message='Hi man' likes='20'/>
            <MyPosts/>

        </div>


    );
};

export default Profile;