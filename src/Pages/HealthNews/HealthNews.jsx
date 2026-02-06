import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  Row,
  Col,
  Container,
  Spinner,
  Button,
} from "reactstrap";

const HealthNews = () => {
  const [berita, setBerita] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBerita = async () => {
      try {
        const res = await axios.get("/api/cnn-news/gaya-hidup");

        setBerita(res.data.data);
        console.log(res.data);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBerita();
  }, []);

  if (loading) {
    return (
      <div className="text-center mt-5">
        <Spinner color="primary" />
        <p>Memuat berita kesehatan...</p>
      </div>
    );
  }

  return (
    <Container className="d-flex min-vh-100 flex-column mt-4">
      <h2 className="text-center mb-4 fw-bold" style={{ fontSize: "50px" }}>
        Berita Kesehatan
      </h2>

      <Row className=" g-5">
        {berita.map((item, index) => (
          <Col md="4" sm="6" xs="12" key={index}>
            <Card className="mb-4 shadow border-0 h-100 rounded-4">
              <img
                src={
                  item.image?.small ||
                  "https://via.placeholder.com/300x180?text=No+Image"
                }
                alt="berita"
                style={{
                  height: "180px",
                  width: "100%",
                  objectFit: "cover",
                }}
              />

              <CardBody className="d-flex flex-column">
                <CardTitle tag="h5">{item.title}</CardTitle>

                <CardText>{item.contentSnippet}</CardText>

                <small className="text-muted mb-2">
                  {new Date(item.isoDate).toLocaleDateString("id-ID", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </small>
                <Button color="primary" className="mt-auto">
                  <a
                    href={item.link}
                    target="_blank"
                    className=" fw-bold text-light"
                    style={{ textDecoration: "none" }}
                  >
                    Baca Selengkapnya
                  </a>
                </Button>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HealthNews;
