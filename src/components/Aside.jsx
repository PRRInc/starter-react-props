import React from "react";

function Aside({dogs}) {
  console.log(dogs);
  return (
    <aside>
      <h3>Roster:</h3>
      <p>"Note: Some dogs were missing."</p>
      <ol>{dogs.map((dog) => (dog.present ? <li key={dog.name}>{dog.name}</li> : null))}</ol>
    </aside>
  );
}

export default Aside;
