import React, { useState } from "react";
import "../Styles/Tweet.css";

const Tweet = (props) => {
  let [likes, setLikes] = useState(0);

  const increaseLikes = () => {
    setLikes(likes + 1);
  };

  const decreaseLikes = () => {
    setLikes(likes - 1);
  };

  let [retweets, setRetweets] = useState(0);

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
          onClick={() => (likes == 0 ? setLikes(1) : setLikes(0))}
          src={
            likes == 0
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
