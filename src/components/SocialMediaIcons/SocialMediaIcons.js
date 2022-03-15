import "./SocialMediaIcons.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const SociaMedialIcons = () => {
  return (
    <div className="icons">
      <FontAwesomeIcon className="icon fb-icon fa-xs" icon={faFacebookF} />
      <FontAwesomeIcon className="icon twitter-icon fa-xs" icon={faTwitter} />
      <FontAwesomeIcon className="icon insta-icon fa-xs " icon={faInstagram} />
    </div>
  );
};

export default SociaMedialIcons;
