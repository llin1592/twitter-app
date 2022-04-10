import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "./Components/Header";
import SearchBar from "./Components/SearchBar";
import Tweet from "./Components/Tweet";
import { db } from "./firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";

// To create a new app, 'npm create-react-app [app name] --template minimal'
// To run an app, manuver to its directory in the terminal and run 'npm start'
// To stop running an app, press Ctrl+C

function App() {
  const [name, setName] = useState("");
  const [handle, setHandle] = useState("");
  const [content, setContent] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [tweets, setTweets] = useState([]);

  // Loads database to page
  useEffect(() => {
    let temp = [];
    getDocs(collection(db, "tweets")).then((snapshot) => {
      snapshot.forEach((doc) => temp.push(doc.data()));
      setTweets([...tweets, ...temp]);
    });
  }, []);

  const [searchText, setSearchText] = useState("");

  return (
    <div>
      <Header />
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/profile">Profile</Link>
      </nav>

      <div className="search-bar">
        <SearchBar
          searchText={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>

      <div className="create-tweet-form">
        <label for="nameField">Name:</label>
        <input
          id="nameField"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label for="handleField">Handle:</label>
        <input
          id="handleField"
          value={handle}
          onChange={(e) => setHandle(e.target.value)}
        />

        <label for="contentField">Content:</label>
        <input
          id="contentField"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <label for="timeField">Time:</label>
        <input
          id="timeField"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />

        <label for="dateField">Date:</label>
        <input
          id="dateField"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <button
          onClick={() => {
            setTweets([
              ...tweets,
              {
                name: name,
                handle: handle,
                content: content,
                time: time,
                date: date,
                likes: 0,
                retweets: 0,
                liked: false,
              },
            ]);
            setName("");
            setHandle("");
            setContent("");
            setTime("");
            setDate("");
          }}
        >
          Create new Tweet
        </button>

        {/* <button
          onClick={() => {
            addDoc(collection(db, "tweets"), {
              name: "Leo",
              handle: "@leo",
              content: "Hello",
              time: "1 am",
              date: "Saturday",
              likes: 0,
              retweets: 0,
              liked: false,
            });
          }}
        >
          Create new Tweet on Database
        </button> */}
      </div>

      <div className="tweet-list">
        {searchText === ""
          ? tweets.map((tweet, i) => (
              <Tweet
                name={tweet.name}
                handle={tweet.handle}
                content={tweet.content}
                time={tweet.time}
                date={tweet.date}
                likes={tweet.likes}
                retweets={tweet.retweets}
                liked={tweet.liked}
                key={i}
              />
            ))
          : tweets
              .filter((tweet) => tweet.name.includes(searchText))
              .map((tweet, i) => (
                <Tweet
                  name={tweet.name}
                  handle={tweet.handle}
                  content={tweet.content}
                  time={tweet.time}
                  date={tweet.date}
                  likes={tweet.likes}
                  retweets={tweet.retweets}
                  liked={tweet.liked}
                  key={i}
                />
              ))}
      </div>
      {/* <Tweet
        name={"Jack"}
        handle={"@jack"}
        content={"just setting up my twttr"}
        time={"3:50 pm"}
        date={"Mar 21, 2006"}
        likes={3}
        retweets={1}
      /> */}
    </div>
  );
}

export default App;
