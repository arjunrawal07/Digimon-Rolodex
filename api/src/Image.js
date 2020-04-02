import React from "react";

class Image extends React.Component {
  render() {

    let image = this.props.img;

    return <div className="image">{image}</div>;
  }
}

export default Image;
