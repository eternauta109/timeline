import React from "react";

import { Rnd } from "react-rnd";
import "./blobitem.css";

class Blob extends React.Component {
  constructor() {
    super();
    this.state = {
      width: "20%",
      height: "50px",
      x: 15,
      y: 20
    };
  }

  render() {
    //costande che abilita il resizing
    const Enable = {
      bottom: false,
      bottomLeft: false,
      bottomRight: false,
      left: true,
      right: true,
      top: false,
      topLeft: false,
      topRight: false
    };

    return (
      <Rnd
        bounds=".timeLine"
        dragGrid={[5, 0]}
        resizeGrid={[5, 5]}
        /* dragAxis= 'x' */

        className="styleShift"
        enableResizing={Enable}
        size={{ width: this.state.width, height: this.state.height }}
        position={{ x: this.state.x, y: "20" }}
        onDrag={(e, d) => {
          this.setState({ x: d.x });
        }}
        minWidth="15%"
        maxHeight="50px"
        onResize={(e, direction, ref, delta, position) => {
          this.setState({
            width: ref.style.width,

            ...position
          });
        }}
      >
        <div className="row d-flex justify-content-between">
          <div className="col-sm detail">
            <ul className="list-group listBlob">
              <li>
                <span className="blobData">x: {this.state.x.toFixed(0)}, </span>
              </li>
              <li>
                <strong className="blobData">
                  width: {parseInt(this.state.width)}
                </strong>
              </li>
              <li>
                <strong className="blobData">
                  end:{" "}
                  {parseInt(this.state.width) +
                    parseInt(this.state.x.toFixed(0))}
                </strong>
              </li>
            </ul>
          </div>
        </div>
      </Rnd>
    );
  }
}
export default Blob;
