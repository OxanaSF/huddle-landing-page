import "./MainPage.css";
import Header from "../Header/Header";
import Button from "../Button/Button";
import SocialMediaIcons from "../SocialMediaIcons/SocialMediaIcons";

const MainPage = () => {
  return (
    <div className="main-page">
      <Header />
      <div className="container">
        <div className="left-div">
          <img
            src={`${process.env.PUBLIC_URL}/images/illustration-mockups.svg`}
            alt="Hiddle"
          />
        </div>

        <div className="right-div">
          <h1>
            Build The Community <br></br>
            Your Fans Will Love
          </h1>
          <p>
            Huddle re-imagines the way we build communities. You have<br></br>a
            voice, but so does your audience. Create connections with<br></br>
            your users as you engage in genuine discussion.
          </p>

          <Button />
          <SocialMediaIcons />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
