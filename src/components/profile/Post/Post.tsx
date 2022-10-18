import React from 'react';
import classes from "../Profile.module.css";

function Post (props:any) {
    return (
        <div>
            <div className={classes.content_avatar}>
                <img src="avatar.png" alt=""/>
                <div>{props.message}</div>
                <div></div>
                <button> Add post </button>
                <span> like {props.likes} </span>
                <p></p>
            </div>
        </div>
    );
};

export default Post;