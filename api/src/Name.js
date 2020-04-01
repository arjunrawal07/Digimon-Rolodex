import React from "react";

class Name extends React.Component {
  render() {
    console.log(this.props);

    let name = this.props.name;

    return <div className="text">{name}</div>;
  }
}

export default Name;
