import React, { Component, Suspense } from "react";
import { BrowserRouter, Route, NavLink } from "react-router-dom";

// import Posts from "./containers/Posts";
// import User from "./containers/User";
import Welcome from "./containers/Welcome";
const Posts = React.lazy(() => import("./containers/Posts"));
const User = React.lazy(() => import("./containers/User"));

class App extends Component {
  state = {
    showPosts: false
  };

  modeHandler = () => {
    this.setState(prevState => ({
      showPosts: !prevState.showPosts
    }));
  };
  render() {
    return (
      <>
        <button onClick={this.modeHandler}>Toggle Mode</button>
        {this.state.showPosts ? (
          <Suspense fallback={<div>Loading...</div>}>
            <Posts />
          </Suspense>
        ) : (
          <Welcome />
        )}
      </>
      // <BrowserRouter>
      //   <>
      //     <nav>
      //       <NavLink to="/user">User Page</NavLink> |&nbsp;
      //       <NavLink to="/posts">Posts Page</NavLink>
      //     </nav>
      //     <Route path="/" component={Welcome} exact />
      //     <Route
      //       path="/user"
      //       render={() => (
      //         <Suspense fallback={<div>Loading...</div>}>
      //           <User />
      //         </Suspense>
      //       )}
      //     />
      //     <Route
      //       path="/posts"
      //       render={() => (
      //         <Suspense fallback={<div>Loading...</div>}>
      //           <Posts />
      //         </Suspense>
      //       )}
      //     />
      //   </>
      // </BrowserRouter>
    );
  }
}

export default App;
