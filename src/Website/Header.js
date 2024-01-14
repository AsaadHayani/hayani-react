import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <section className="header">
      <div className="info text-center pt-5">
        <h2 className="display-5 text-white">
          My Website - Using REACT.JS
          <br />
          BY Asaad Hayani
        </h2>
        <p>Freelancer</p>
        <a
          download
          href="./cv.pdf"
          className="py-2 btn-site px-4 mt-2 btn text-white"
        >
          Download C.V <FontAwesomeIcon icon={faDownload} />
        </a>
      </div>
    </section>
  );
};

export default Header;
