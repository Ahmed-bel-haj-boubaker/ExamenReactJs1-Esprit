import "./notfound.css";
import notFoundSVG from "../assets/page-not-found.svg";
import Alert from "react-bootstrap/Alert";
import { useEffect, useState } from "react";

const NotFound = () => {
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    setShowAlert(true);
    const timer = setTimeout(() => {
      setShowAlert(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {showAlert && (
        <Alert variant="info" onClose={() => setShowAlert(false)} dismissible>
          This page does not exist
        </Alert>
      )}
      <div className="body">
        <img src={notFoundSVG} height={200} width={200} alt="vector" />
        <div className="wrapper">
          <h1>Page Not Found</h1>
          <p className="message">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id sit
            inventore eveniet cumque alias.
          </p>
          <a href="#" className="btn">
            Learn More About Us
          </a>
          <p className="copyRights">&copy; 2020 DeltatyCode</p>
        </div>
      </div>
    </>
  );
};

export default NotFound;
