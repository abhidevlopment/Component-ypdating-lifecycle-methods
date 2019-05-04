import React, { Component } from "react";
import LifecycleB from "./LifecycleB";

class LifecycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Abhi"
    };
    console.log("Lifecycle A Constructor");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("Lifecycle A getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("lifecycle A componentDidmount");
  }

  shouldComponentUpdate() {
    console.log("Lifecycle A shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("Lifecycle A getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("Lifecycle A componentDidUpdate");
  }

  changeState = () => {
    this.setState({
      name: "codeevolution"
    });
  };
  render() {
    console.log("Lifecycle A render");
    return (
      <div>
        <div> Lifecyle A</div>
        <button onClick={this.changeState}> change State</button>
        <LifecycleB />
      </div>
    );
  }
}

export default LifecycleA;
