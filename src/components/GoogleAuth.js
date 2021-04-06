import React from "react";

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client.init({
        clientId:
          "142932054783-f12lqmv71js47kppj0128t55kpngn5o1.apps.googleusercontent.com",
        scope: "email"
      });
    });
  }
  render() {
    return <div>Google API</div>;
  }
}

export default GoogleAuth;
