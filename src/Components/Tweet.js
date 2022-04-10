import React, { useState, useEffect } from "react";
import "../Styles/Tweet.css";

const Tweet = (props) => {
  let [likes, setLikes] = useState(props.likes);

  let [retweets, setRetweets] = useState(props.retweets);

  let [liked, setLiked] = useState(props.liked);

  useEffect(() => {
    setLikes(likes + 1);
  }, []);

  // Should use className in JSX
  return (
    <div class="tweet-container">
      <div class="tweet-header">
        <div class="author-info">
          <p class="name">{props.name}</p>
          <p class="handle">{props.handle}</p>
        </div>
      </div>

      <p class="content">{props.content}</p>

      <div class="time-info">
        <p class="time">{props.time}</p>
        <p class="date">{props.date}</p>
      </div>

      <hr />
      <div class="button-bar">
        <img
          class="like-heart"
          onClick={() => {
            if (!liked) {
              setLiked(true);
              setLikes(likes + 1);
            } else {
              setLiked(false);
              setLikes(likes - 1);
            }
          }}
          src={
            liked == 0
              ? "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/twitter/185/white-heart_1f90d.png"
              : "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/twitter/31/heavy-black-heart_2764.png"
          }
        />

        <p>{likes} likes </p>

        <button onClick={() => setRetweets(retweets + 1)}>Retweet</button>

        <button onClick={() => setRetweets(retweets - 1)}>Undo retweet</button>

        <p>{retweets} retweets</p>
      </div>
    </div>
  );
};

export default Tweet;
