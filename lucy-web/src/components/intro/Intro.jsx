import "./Intro.css";
import photoLucka from "../../images/lucka-photo.jpg";
import btnImg from "../../assets/hireme.png";
import { Link } from "react-scroll";

export const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello, </span>
        <span className="introText">
          I´m <span className="introName">Lucy</span>, <br /> The English
          teacher
        </span>
        {/* <p className="box introPara1">
          Mým hlavním zaměřením je angličtina, kterou jsem vystudovala na
          Masarykově univerzitě v Brně. Kromě angličny hovořím francouzky. Kromě
          studia jsem oba jazyky pilovala i během zahraničních pobytů. výukou
          jazyku na ZŠ Strání. Od roku 2023 učím na volné noze.
        </p> */}
        <p className="box introPara2">
          Chcete zlepšit svoji angličtinu nebo němčinu? Procvičit si konverzaci
          a zbavit se českého přízvuku? Rozšířit slovní zásobu a vyznat se v
          gramatice?
        </p>
        <p className="box introPara3">
          A to vše v pohodové a přátelské atmosféře?
        </p>
        <p className="box introPara4">
          Výuku přizpůsobím vašim potřebám a stylu učení, abyste dosáhli co
          nejlepších výsledků.
        </p>
        <Link>
          <button className="btn">
            <img src={btnImg} alt="" className="btnImg" />
            Hire me
          </button>
        </Link>
      </div>

      <img src={photoLucka} alt="Profile" className="bg-photo" />
    </section>
  );
};
