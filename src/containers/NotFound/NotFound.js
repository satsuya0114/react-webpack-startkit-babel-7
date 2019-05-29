import React from "react";
import "./NotFound.less";
// import "./Home.scss";

export default class NotFound extends React.PureComponent {
  render() {
    return (
      <div className="NotFound">
        <div className="lander">
          <h1>404</h1>
          <p>The Page is Not Found</p>
        </div>
      </div>
    );
  }
}
