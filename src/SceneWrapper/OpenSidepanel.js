import React from "react";
import ReactDOM from "react-dom";
import { SceneWrapper, ViewWrapper, Sidepanel } from "airr-react";
import "airr-react/dist/airr-react.css";

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

  openSidepanelExample = () => {
    return this.openSidepanel();
  };

  hideSidepanelExample = () => {
    return this.hideSidepanel();
  };

  viewsConfig = {
    [HelloWorldViewName]: {
      type: HelloWorld,
      props: {
        name: HelloWorldViewName,
        title: "This is Title in navbar",
        children: (
          <button
            onClick={this[this.props.handleMethod]}
            style={{ fontSize: "2rem" }}
          >
            Click me
          </button>
        )
      }
    }
  };
}
const HelloWorldViewName = "hello-world-view";
const SidepanelConfig = {
  type: Sidepanel,
  props: {
    side: "top",
    children: (
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
        <br />
        {this.props.handleSidepanelMethod && (
          <button
            style={{ fontSize: "2rem" }}
            onClick={this[this.props.handleSidepanelMethod]}
          >
            Click me
          </button>
        )}
      </div>
    ),
    enabled: false,
    sizeFactor: 1 / 3,
    animationTime: 200
  }
};
class HelloWorld extends ViewWrapper {
  content() {
    const content =
      typeof this.props.render === "function"
        ? this.props.render()
        : typeof this.props.children === "function"
        ? this.props.children()
        : this.props.children;

    return (
      <div className={HelloWorldViewName}>{content ? content : "What up!"}</div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<SimpleScene />, rootElement);
