import React from "react";

const login = props => {
  console.log(props);
  return (
    <>
      <button onClick={props.onLogout}>Logout</button>
      <button onClick={props.onLogin}>Login</button>
    </>
  );
};

export default React.memo(login);
