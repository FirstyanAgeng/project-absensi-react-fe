import { Container, Button, Badge } from "react-bootstrap";
import { useEffect, useState } from "react";
import Navbars from "../../components/Navbars";
import axios from "axios";
import Edit from "./edit";
import { Logout } from "./logout";

const Dashboard = ({ title }) => {
  const [absensiList, setAbsensiList] = useState([]);
  const [absenNotif, setAbsenNotif] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("nama") && !localStorage.getItem("nip")) {
      window.location.replace("/login");
    }
    axios({
      method: "GET",
      url: "http://localhost:3001/absensi",
    }).then((result) => setAbsensiList(result.data.absensi));
  }, [absenNotif]);

  const Attendance = (params) => {
    const requestingData = {
      nip: localStorage.getItem("nip"),
    };
    axios({
      method: "POST",
      url: `http://localhost:3001/absensi/${params}`,
      data: requestingData,
    }).then((result) => {
      setAbsenNotif(!absenNotif);
    });
  };

  return (
    <Container>
      <main className="col-md-12 ms-sm-auto col-lg-12 px-md-4">
        <Navbars />
        <h2>{title}</h2>
        <div>
          <p>
            Selamat Datang{" "}
            <span style={{ color: "lightblue" }} className="fw-bold">
              {localStorage.getItem("nama")}
            </span>
            !
          </p>
          <p>nip : {localStorage.getItem("nip")} </p>
          <p>role : {localStorage.getItem("role")} </p>
          <Button onClick={() => Logout()} className="my-2" variant="danger">
            Logout
          </Button>
          {/* <Button
            onClick={() => logout()}
            className="mt-2"
            size="sm"
            variant="danger"
          >
            Logout
          </Button> */}
        </div>
        <Edit title="Edit Profile" />
        <div className="table-responsive">
          <table className="table table-striped table-sm">
            <thead>
              <tr>
                <th scope="col">No.</th>
                <th scope="col">NIP</th>
                <th scope="col">Status</th>
                <th scope="col">Tanggal</th>
              </tr>
            </thead>
            <tbody>
              {absensiList.map((absen, i) => {
                const { users_nip, status, createdAt } = absen;
                return (
                  <tr key={i}>
                    <td>{(i += 1)}</td>
                    <td>{users_nip}</td>
                    <td>{status}</td>
                    <td>{createdAt}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="d-flex justify-content-center ms-5 gap-2">
          <Badge
            pill
            bg="primary"
            style={{ cursor: "pointer" }}
            onClick={() => Attendance("checkin")}
          >
            Checkin
          </Badge>
          <Badge
            pill
            bg="danger"
            style={{ cursor: "pointer" }}
            onClick={() => Attendance("checkout")}
          >
            Checkout
          </Badge>
        </div>
      </main>
    </Container>
  );
};

export default Dashboard;
