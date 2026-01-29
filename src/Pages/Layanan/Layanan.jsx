import Layanan from "../../components/Layanan/Layanan.jsx";
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import dataLayanan from "../../data.json";
import { useState } from "react";
import { Container, Col, Row, Form, Button } from "react-bootstrap";
import add_img from "../../assets/add.svg";

const Layanann = () => {
  const [cari, setCari] = useState("");
  const [layanan, setLayanan] = useState(dataLayanan);
  const [nama, setNama] = useState("");
  const [keterangan, setKeterangan] = useState("");
  const [gambar, setGambar] = useState("");

  const hasilCari = layanan.filter((i) =>
    i.nama_layanan.toLowerCase().includes(cari.toLowerCase()),
  );

  const tambahLayanan = (t) => {
    t.preventDefault();

    if (!nama || !keterangan || !gambar) {
      alert("Maaf, semua field harus diisi");
      return;
    }

    const layananBaru = {
      nama_layanan: nama,
      keterangan: keterangan,
      img: gambar,
    };

    const newLayanan = [...layanan];
    newLayanan.push(layananBaru);
    setLayanan(newLayanan);

    setNama("");
    setKeterangan("");
    setGambar("");
  };

  return (
    <div>
      <Header />
      <h1
        style={{
          textAlign: "center",
          marginTop: "70px",
          fontSize: "3rem",
          color: "#0c77ce",
        }}
      >
        &#10084; Layanan & Fasilitas Kami &#10084;
      </h1>
      <div className="input">
        <input
          type="text"
          placeholder="Cari Layanan..."
          value={cari}
          onChange={(c) => setCari(c.target.value)}
        />
      </div>
      <div className="card-wraper2">
        {hasilCari.length > 0 ? (
          hasilCari.map((item, index) => (
            <Layanan
              key={index}
              gambar={`./image/${item.img}`}
              namaLayanan={item.nama_layanan}
              keterangan={item.keterangan}
            />
          ))
        ) : (
          <p className="p">Layanan tidak ditemukan !!!</p>
        )}
      </div>
      <h1 className="text-center fw-bold pt-5 pb-5 text-primary">
        Tambahkan Layanan
      </h1>
      <Container>
        <Row>
          <Col md={6} className="text-center mb-4">
            <img src={add_img} alt="add" className="img-fluid" />
          </Col>
          <Col md={6}>
            <Form onSubmit={tambahLayanan}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label className="fw-bold">Nama Layanan</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Masukan nama layanan"
                  className="border border-dark"
                  value={nama}
                  onChange={(n) => setNama(n.target.value)}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label className="fw-bold">Keterangan</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Masukan keterangan"
                  className="border border-dark"
                  value={keterangan}
                  onChange={(k) => setKeterangan(k.target.value)}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label className="fw-bold">Gambar</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Contoh: dikdik.jpg"
                  className="border border-dark"
                  value={gambar}
                  onChange={(g) => setGambar(g.target.value)}
                />
              </Form.Group>
              <Button
                variant="primary"
                size="lg"
                className="w-100"
                type="submit"
              >
                Tambahkan Layanan
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Layanann;
