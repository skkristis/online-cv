import "../stylesheets/Header.css";
import HeaderIntro from "./HeaderIntro";
import pfpImgUrl from "../../media/profile-pic.jpg";

export default function Header() {
  return (
    <section className="Header-bg_color">
      <div className="LandingPage-container container-max">
        <HeaderIntro />
        <div className="LandingPage-photo_container">
          <img className="LandingPage-photo" src={pfpImgUrl} alt="profile picture" />
        </div>
      </div>
    </section>
  );
}
