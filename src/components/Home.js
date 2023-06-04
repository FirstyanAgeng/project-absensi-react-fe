import { Container } from "react-bootstrap";
const Home = ({ title }) => {
  return (
    <>
      <Container>
        <h1>{title}</h1>
        <p>Selamat datang di halaman Home</p>
      </Container>
    </>
  );
};

export default Home;
