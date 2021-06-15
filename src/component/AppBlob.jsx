import { useState, useEffect } from "react";
import { Modal, Button, Form, Col } from "react-bootstrap";
import Ward from "./ward";
import _ from "lodash";
import "./AppBlob.css";
import { useSelector } from "react-redux";

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  function handleChange(e) {
    setValue({
      ...value,
      [e.target.name]: e.target.value
    });
  }
  return [value, handleChange];
}

export default function AppBlob() {
  //hooks
  const arrayTime = useSelector((state) => state.timing);

  /*  console.log("arrayTime", arrayTime); */
  const [input, setInput] = useInput({
    week: 1,
    day: "July 01 2021",
    startDay: "14:00",
    endDay: "27:00"
  });
  const [ward, setWard] = useState("ward");
  const [wardList, setWardList] = useState([]);
  const [wardCount, setWardCount] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [startDate, setStartDate] = useState(new Date("2021/01/01"));
  const [dateTime, setDateTime] = useState([]);

  useEffect(() => {
    // Update the document title using the browser API
    const arrayTimeApp = arrayTime;
    /* console.log("arrayapp", arrayTimeApp);
    console.log("lenght",arrayTimeApp.length ); */

    const start = arrayTimeApp
      .map((e) => {
        return e.time;
      })
      .indexOf(input.startDay);

    const end = arrayTimeApp
      .map(function (e) {
        return e.time;
      })
      .indexOf(input.endDay);

    const newArray = arrayTimeApp.slice(start, end + 1);
    console.log(newArray);
    setDateTime(newArray);
  }, [input.startDay, input.endDay]);

  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };

  const setWardName = (e) => {
    setWard(e.target.value);
  };

  const addWardInlistInput = () => {
    /* console.log(ward); */
    const appArray = wardList.concat(ward);

    setWardList(appArray);
    console.log(wardList);
    setWard("");
    setIsOpen(false);
  };

  const addWardObj = () => {};

  const createWard = (w, i, k) => {
    return (
      <Ward
        className="ward"
        ward={w}
        input={i}
        stdt={startDate}
        key={k}
        dateTime={dateTime}
      />
    );
  };

  return (
    <div className="container bodyApp ">
      <Form.Row className="justify-content-sm-center">
        <Col xs={3}>
          <Form.Control placeholder="week" name="week" onChange={setInput} />
        </Col>
        <Col>
          <Form.Control
            placeholder="Start"
            name="startDay"
            onChange={setInput}
          />
        </Col>
        <Col>
          <Form.Control placeholder="End" name="endDay" onChange={setInput} />
        </Col>
        <Col>
          <Button onClick={showModal}>Add Ward</Button>
        </Col>
      </Form.Row>

      {/* modal for input ward name */}

      <Modal show={isOpen} onHide={hideModal}>
        <Modal.Header>
          <Modal.Title>Add ward name</Modal.Title>
        </Modal.Header>
        <Form.Control placeholder="Ward" name="ward" onChange={setWardName} />
        <Modal.Footer>
          <Button onClick={hideModal}>Cancel</Button>
          <Button onClick={addWardInlistInput}>Save</Button>
        </Modal.Footer>
      </Modal>

      <div className=" ward-container">
        {_.map(wardList, (ward, key) => createWard(ward, input, key))}
      </div>
      <div className="footer">ciao</div>
    </div>
  );
}
