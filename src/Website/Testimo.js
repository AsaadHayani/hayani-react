import { Container } from "react-bootstrap";

const Testimo = () => {
  const data = [
    {
      image:
        "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, numquam saepe maiores animi harum error inventore amet incidunt cumque, excepturi a architecto aliquid ex vitae explicabo asperiores repellat! Assumenda, magnam.",
      name: "Asaad Hayani",
    },
  ];
  return (
    <section className="testimonials text-center p-2">
      <Container>
        <div className="heading my-3">
          <h2>Testimonials</h2>
        </div>
        {data.map((item) => {
          return (
            <div key={item.name}>
              <div className="info">
                <img src={item.image} alt="" className="mb-2 rounded-circle" />
              </div>
              <q>{item.desc}</q>
              <p className="fw-bold">{item.name}</p>
            </div>
          );
        })}
        <hr />
      </Container>
    </section>
  );
};

export default Testimo;
