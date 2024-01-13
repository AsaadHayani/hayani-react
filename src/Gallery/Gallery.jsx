import { useState } from "react";
import "./Gallery.css";
import { Col, Container, Row } from "react-bootstrap";

const Gallery = () => {
  const imgs = [
    {
      id: 1,
      src: "https://picsum.photos/200/100",
    },
    {
      id: 2,
      src: "https://picsum.photos/201/100",
    },
    {
      id: 3,
      src: "https://picsum.photos/202/100",
    },
    {
      id: 4,
      src: "https://picsum.photos/203/100",
    },
    {
      id: 5,
      src: "https://picsum.photos/204/100",
    },
    {
      id: 6,
      src: "https://picsum.photos/205/100",
    },
    {
      id: 7,
      src: "https://picsum.photos/206/100",
    },
  ];

  const [sliderData, setSliderData] = useState(imgs[3]);

  const clickImg = (id) => {
    // console.log(id);
    const slider = imgs[id];
    setSliderData(slider);
  };
  return (
    <div className="text-center p-4 gal">
      <img
        src={sliderData.src}
        alt=""
        className="mb-5 img"
        height="200"
        width="400"
      />
      <Container>
        <Row className="gap-row-2 justify-content-evenly">
          {imgs.map((img, id) => (
            <Col key={img.id}>
              <img
                src={img.src}
                className={
                  sliderData.id === id + 1 ? "rounded-circle" : "rounded"
                }
                alt=""
                onClick={() => clickImg(id)}
                height="150"
                width="150"
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Gallery;
