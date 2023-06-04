import { Container, Form, Button } from "react-bootstrap";
import ReactTypingEffect from "react-typing-effect";
import { useState, useEffect } from "react";
import axios from "axios";

const Login = ({ title, description }) => {
  useEffect(() => {
    if (localStorage.getItem("nama") && localStorage.getItem("nip")) {
      console.log("user sudah login");
      window.location.replace("/dashboard");
    }
  }, []);

  const [NIP, setNIP] = useState("");
  const [PASS, setPASS] = useState("");

  const handleNIP = (inputNIP) => {
    setNIP(inputNIP);
  };

  const handlePASS = (inputPASS) => {
    setPASS(inputPASS);
  };

  const userLogin = () => {
    console.log("user login ready");
    console.log("nip: ", NIP);
    console.log("password: ", PASS);

    const requestingData = {
      nip: NIP,
      password: PASS,
    };

    axios({
      method: "POST",
      url: "http://localhost:3001/users/login",
      data: requestingData,
    }).then((result) => {
      //memasukan data ke dalam localstorage browser
      localStorage.setItem("nip", result.data.users.nip);
      localStorage.setItem("nama", result.data.users.nama);
      localStorage.setItem("role", result.data.users.role);
      window.location.replace("/dashboard");
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
            <Form.Label className="fw-bold">Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="***"
              required
              onChange={(event) => handlePASS(event.target.value)}
            />
          </Form.Group>
          <Button className="mt-4 w-100" onClick={() => userLogin()}>
            Login
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default Login;
