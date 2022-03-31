import React, { useState } from "react";
import Person from "./Person";

function InputField() {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [people, setPeople] = useState([]);

  // Collection of variables or an object
  // {name: "leo", bio: "3rd year"}
  // But we can't push that into people, because we do not have direct access to it (have to change using just setPeople and not using people)
  return (
    <div style={{ textAlign: "center" }}>
      {/* Takes the event e and get the value from it */}
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <input value={bio} onChange={(e) => setBio(e.target.value)} />
      <button onClick={() => setPeople(...people, { name: name, bio: bio })}>
        Create Person
      </button>
      {/* Use .map() to convert each element to a Person component */}
      {people.map(
        // .map() just keeps track of index behind the scene, so we can just ask for it in the arrow function
        (person, i) => (
          <Person name={person.name} bio={person.bio} key={i} />
        ) // Should have a unique key for each element (ex. index) so the background stuff can optimize the runtime
      )}
      {/* Shows the backend of what the data is*/}
      {/* {JSON.stringify(people)} */}

      {/* <Person name={"leo"} bio={"3rd year"} /> */}
    </div>
  );
}
