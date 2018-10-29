import React from "react";

const profile = props => {
  console.log(props);
  return (
    <h1>{props.authenticated ? "You are logged in!" : "Not logged in!"}</h1>
  );
};

export default React.memo(profile);
