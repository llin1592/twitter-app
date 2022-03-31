import React, { useState } from "react";
import Header from "./Components/Header";
import SearchBar from "./Components/SearchBar";
import Tweet from "./Components/Tweet";

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

  const [searchText, setSearchText] = useState("");

  return (
    <div>
      <Header />
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
      </div>

      <div className="tweet-list">
        {searchText == ""
          ? tweets.map((tweet, i) => (
              <Tweet
                name={tweet.name}
                handle={tweet.handle}
                content={tweet.content}
                time={tweet.time}
                date={tweet.date}
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
