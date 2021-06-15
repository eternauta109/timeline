import "./timeLine.css";
import Blob from "./blobitem";
import _, { size } from "lodash";
import { useState, useEffect } from "react";

import timespan from "timespan";

export default function TimeLine(props) {
  const [blobList, setBlobList] = useState([]);
  const [counterBlob, setCounterBlob] = useState(1);
  const [slider, setSlider] = useState([]);

  const el = props.el;

  const createBlobElement = () => {
    return (
      setBlobList(
        blobList.concat(
          <Blob input={props.input} key={counterBlob} id={counterBlob} />
        )
      ),
      setCounterBlob(counterBlob + 1),
      console.log("blob couinater:" + counterBlob)
    );
  };

  return (
    <div className="container-timeline">
      <div className="row header">
        <div className="col">
          <span>{el.id}</span>
        </div>
        <div className="col d-flex flex-row bd-highlight">
          <button
            className="btn btn-info btn-addless"
            value={counterBlob}
            onClick={createBlobElement.bind(this)}
          >
            <p>+</p>
          </button>

          <button
            className="btn btn-danger btn-addless "
            value={props.id}
            onClick={props.remove.bind(this, props.el.id)}
          >
            -
          </button>
        </div>
      </div>
      <div className="timeLine" name={props.el.id}>
        <div className="col-12">{blobList}</div>
      </div>
    </div>
  );
}
