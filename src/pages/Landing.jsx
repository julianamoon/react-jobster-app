import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components/";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>

      <div className="container page">
        {/* info */}
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Take control of your job hunt with our powerful website application!
            Jobster is the place designed to simplify the process of managing and tracking
            your job applications, while still providing valuable insights to help you
            secure that dream job of yours.
          </p>
          <Link to="/register" className="btn btn-hero">
            login/register
          </Link>
        </div>

        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
