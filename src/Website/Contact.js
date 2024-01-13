import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section className="contact text-center p-2">
      <Container>
        <div className="heading my-3">
          <h2>Contact Us</h2>
        </div>
        <form>
          <div className="d-flex justify-content-between">
            <input
              type="text"
              className="form-control"
              placeholder="First Name"
            />
            <input
              type="text"
              className="form-control"
              placeholder="Last Name"
            />
          </div>
          <input type="email" className="form-control" placeholder="Email" />
          <input type="text" className="form-control" placeholder="Phone" />
          <textarea
            cols="30"
            rows="3"
            className="form-control"
            placeholder="Message"
          ></textarea>
          <Link to="#" className="btn btn-site text-white my-4 py-2 px-3">
            Send
          </Link>
        </form>
      </Container>
    </section>
  );
};

export default Contact;
