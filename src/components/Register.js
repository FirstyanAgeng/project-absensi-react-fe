import { Container, Form, Button } from "react-bootstrap";
import ReactTypingEffect from "react-typing-effect";
import { useState, useEffect } from "react";
import axios from "axios";

const Register = ({ title, description }) => {
  const [NIP, setNIP] = useState("");
  const [NAMA, setNAMA] = useState("");
  const [PASS, setPASS] = useState("");
  const [ROLE, setROLE] = useState("");

  const handleNIP = (inputNIP) => {
    setNIP(inputNIP);
  };

  const handleNAMA = (inputNAMA) => {
    setNAMA(inputNAMA);
  };

  const handlePASS = (inputPASS) => {
    setPASS(inputPASS);
  };
  const handleROLE = (inputROLE) => {
    setROLE(inputROLE);
  };

  const userRegister = () => {
    console.log("user Register ready");

    const requestingData = {
      nip: NIP,
      nama: NAMA,
      password: PASS,
      role: ROLE,
    };

    axios({
      method: "POST",
      url: "http://localhost:3001/users",
      data: requestingData,
    }).then((result) => {
      console.log(result.data);
      if (result.data.registered) {
        alert("pendaftaran berhasil");
        window.location.replace("/login");
      } else {
        alert("gagal mendaftar");
      }
    });
  };

  return (
    <>
      <Container>
        <div className="d-flex justify-content-center fw-bold h3 my-4">
          <ReactTypingEffect
            text={[title, description]}
            speed={100}
            eraseDelay={800}
            eraseSpeed={100}
            typingDelay={100}
          />
        </div>
        <Form
          className="w-50 mx-auto p-5 text-white"
          style={{ backgroundColor: "lightblue" }}
        >
          <Form.Group>
            <Form.Label className="fw-bold">NIP</Form.Label>
            <Form.Control
              type="number"
              placeholder="masukan nip anda"
              required
              onChange={(event) => handleNIP(event.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label className="fw-bold">NAMA</Form.Label>
            <Form.Control
              type="text"
              placeholder="masukan nama anda"
              required
              onChange={(event) => handleNAMA(event.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label className="fw-bold">ROLE</Form.Label>
            <Form.Control
              type="text"
              placeholder="masukan role anda"
              required
              onChange={(event) => handleROLE(event.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label className="fw-bold">Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="***"
              required
              onChange={(event) => handlePASS(event.target.value)}
            />
          </Form.Group>
          <Button className="mt-4 w-100" onClick={() => userRegister()}>
            Daftar Sekarang
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default Register;
