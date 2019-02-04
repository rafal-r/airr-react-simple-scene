import React from "react";
import ReactDOM from "react-dom";
import { SceneWrapper, ViewWrapper, Sidepanel } from "airr-react";
import "airr-react/dist/airr-react.css";

const HelloWorldViewName = "hello-world-view";
const SidepanelContent = (
  <div
    style={{
      width: "100%",
      height: "100%",
      textAlign: "center",
      paddingTop: "2rem",
      color: "white",
      backgroundColor: "purple"
    }}
  >
    I am the Sidepanel
  </div>
);
const SidepanelConfig = {
  type: Sidepanel,
  props: {
    side: "top",
    children: SidepanelContent,
    enabled: false,
    sizeFactor: 1 / 3,
    animationTime: 200
  }
};

export default class SimpleScene extends SceneWrapper {
  constructor(props) {
    super(props);

    this.state = {
      ...this.state,
      activeViewName: HelloWorldViewName,
      sidepanel: SidepanelConfig,
      views: [this.getFreshViewConfig(HelloWorldViewName)]
    };
  }

  handleButtonClick = () => {
    return this.openSidepanel();
  };

  viewsConfig = {
    [HelloWorldViewName]: {
      type: HelloWorld,
      props: {
        name: HelloWorldViewName,
        openSidepanel: this.openSidepanel
      }
    }
  };
}

class HelloWorld extends ViewWrapper {
  content() {
    return (
      <div
        className={HelloWorldViewName}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100vw",
          height: "100vh"
        }}
      >
        {" "}
        <button
          onClick={this.props.openSidepanel}
          style={{
            fontSize: "2rem"
          }}
        >
          Click me
        </button>
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<SimpleScene />, rootElement);
