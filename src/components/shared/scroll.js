import { useEffect } from "react";
import { withRouter } from "react-router-dom";

const ScrollHandlerComponent = ({ location }) => {
  useEffect(() => {
    console.log(location.hash);
    const element = document.getElementById(location.hash);
    console.log(element)

    setTimeout(() => {
      window.scrollTo({
        behavior: element ? "smooth" : "auto",
        top: element ? element.offsetTop : 0
      });
    }, 100);
  }, [location]);

  return null;
};

export default withRouter(ScrollHandlerComponent);