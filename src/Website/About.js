import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from "react-bootstrap";

const About = () => {
  const items = [
    { text: "Address: Turkey, Gaziantep" },
    {
      text: "Whatsapp",
      link: "https://wa.me/+306993352454",
      linkText: "My Phone",
    },
    {
      text: "Email",
      link: "mailto:asaad99hayani@gmail.com",
      linkText: "My Email",
    },
    {
      text: "LinkedIn",
      link: "https://www.linkedin.com/in/asaad-hayani-19308b193",
      linkText: "Asaad Hayani",
    },
    {
      text: "Github",
      link: "https://github.com/AsaadHayani",
      linkText: "Asaad Hayani",
    },
  ];
  return (
    <section className="about p-3">
      <Container>
        <div className="d-flex justify-content-between align-items-center">
          <div className="info">
            <h2>About Me</h2>
            <p>
              Very organized and hard working I am looking for a responsible
              position to gain some work experience. I have solid experience in
              Bootstrap, Jquery, Javascript, PHP, MySQL and procient with
              framework Laravel for Backend (Platform Study Learning Project),
              React.Js for frontend, and I have many projects. I learned
              developed mobile apps using Flutter. I have minimal experience
              with NodeJs, ExpressJs and MongoDB. I have a program similar to
              Word, a program to print invoices in the store, and Todolist by C#
              WinForms.
            </p>
            <ul className="m-0 p-0 list-unstyled">
              {items.map((item) => {
                return (
                  <li key={item.text}>
                    <FontAwesomeIcon icon={faCheck} />
                    {item.text}:
                    <a
                      href={item.link}
                      target="_blank"
                      className="px-2"
                      rel="noopener noreferrer"
                    >
                      {item.linkText}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <img
            src="https://images.pexels.com/photos/2102415/pexels-photo-2102415.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Asaad Hayani"
            width="280px"
            height="270px"
          />
        </div>
      </Container>
    </section>
  );
};

export default About;
