import {
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const OurTeam = () => {
  const items = [
    {
      name: "Asaad Hayani",
      image:
        "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
      desc:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus id nihil sequi itaque, voluptatem nobis.",
      social: {
        facebook: "https://www.facebook.com/asaad.hayani.9/",
        linkedin: "",
        github: "https://github.com/AsaadHayani",
      },
    },
    {
      name: "Sami Khalil",
      image:
        "https://www.theportlandclinic.com/wp-content/uploads/2019/07/Person-Curtis_4x5-e1564616444404.jpg",
      desc:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus id nihil sequi itaque, voluptatem nobis.",
      social: {
        facebook: "https://www.facebook.com/asaad.hayani.9/",
        linkedin: "",
        github: "https://github.com/AsaadHayani",
      },
    },
    {
      name: "Ahmed Ismaeel",
      image:
        "https://www.wikihow.com/images/9/90/What_type_of_person_are_you_quiz_pic.png",
      desc:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus id nihil sequi itaque, voluptatem nobis.",
      social: {
        facebook: "https://www.facebook.com/asaad.hayani.9/",
        linkedin: "",
        github: "https://github.com/AsaadHayani",
      },
    },
  ];
  return (
    <section className="our-team text-center p-2">
      <div className="heading my-3">
        <h2>Our Team</h2>
      </div>
      <div className="d-flex justify-content-evenly">
        {items.map((item) => {
          return (
            <div className="item overflow-hidden" key={item.name}>
              <img src={item.image} alt="" />
              <div className="info">
                <h4>{item.name}</h4>
                <p>{item.desc}</p>
                <div>
                  <ul className="m-0 p-0 list-unstyled">
                    <li>
                      <a
                        href={item.social.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FontAwesomeIcon icon={faFacebook} size="2xl" />
                      </a>
                    </li>
                    <li>
                      <a
                        href={item.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FontAwesomeIcon icon={faLinkedin} size="2xl" />
                      </a>
                    </li>
                    <li>
                      <a
                        href={item.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FontAwesomeIcon icon={faGithub} size="2xl" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <hr />
    </section>
  );
};

export default OurTeam;
