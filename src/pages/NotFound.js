import { Container } from "react-bootstrap";

const NotFound = () => {
  return (
    <>
      <Container>
        <h1 className="fw-bold">PAGE NOT FOUND</h1>
        <p className="text-muted">Halaman tidak tersedia</p>
        <i>Mohon coba kembali</i>
      </Container>
    </>
  );
};

export default NotFound;
