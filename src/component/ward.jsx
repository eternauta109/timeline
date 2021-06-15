import TimeLine from "./timeLine";
import "./ward.css";
import { useState, useEffect, useRef } from "react";
import { useMeasure } from "react-use";
import _ from "lodash";
import { Button, Form, Col, Row } from "react-bootstrap";

export default function ContainerTimeLine(props) {
  const input = props.input;
  const [counter, setCounter] = useState(0);
  const [timeLineGroup, setTimeLineGroup] = useState([]);
  const [ref, { x, y, width, height, top, right, bottom, left }] = useMeasure();
  const numberOfElement = props.dateTime.length;

  const createSingleTimeLine = () => {
    return (
      setTimeLineGroup(
        timeLineGroup.concat({
          ward: `${input.ward}`,
          startDay: `${input.startDay}`,
          endDay: `${input.endDay}`,
          id: `tl${counter}`,
          key: { counter }
        })
      ),
      setCounter(counter + 1)
    );
  };

  const removeTimeLineElement = (id) => {
    const elClone = [...timeLineGroup];
    const appArray = _.remove(elClone, function (n) {
      return n.id === id;
    });
    return console.log("remove elemnt: " + id), setTimeLineGroup(elClone);
  };

  const createElement = (el, key) => {
    return (
      <TimeLine
        dateTime={props.dateTime}
        remove={removeTimeLineElement}
        el={el}
        key={key}
      />
    );
  };

  const createTimeSlider = (el, key, w, num) => {
    const wdh = w / num;

    console.log("width enter", w);

    console.log("timer width", wdh);

    const styles = {
      color: "red",
      width: wdh + "px",
      border: "solid 1px #ddd",
      fontSize: "1.1vmin"
    };

    let symbol = "";

    switch (el.minute) {
      case "00":
        // code block
        symbol = el.hour;
        break;
      case "15":
        symbol = "┴";
        break;
      case "45":
        symbol = "┴";
        break;
      case "30":
        symbol = "┴";
        break;
      default:
        symbol = "─";
    }
    return (
      <div style={styles} key={key}>
        {symbol}
      </div>
    );
  };

  return (
    <div className="container caontainerWard">
      <div className="inputWard">
        <Row>
          <Col xs={9}>
            <ul className="list-group">
              <li>ward: {props.ward}</li>
              <li>start: {input.startDay}</li>
              <li>end: {input.endDay}</li>
            </ul>
          </Col>
          <Col xs={3}>
            <Button
              onClick={createSingleTimeLine}
              className="btn btn-secondary btn-sm btn-add-timeline"
            >
              <p>add some workshift</p>
            </Button>
          </Col>
        </Row>
      </div>
      {_.map(timeLineGroup, (item, key) => createElement(item, key))}

      <div ref={ref} className="timer">
        {_.map(props.dateTime, (item, key) =>
          createTimeSlider(item, key, width.toFixed(0), numberOfElement)
        )}
      </div>
    </div>
  );
}
