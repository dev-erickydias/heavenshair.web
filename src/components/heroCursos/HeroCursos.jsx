import "../header/hero/hero.css"
import "./heroCursos.css"
import CustomImage from "../customImage/CustomImage";
import CustomButton from "../customButton/CustomButton";
import Link from "next/link";

export default function HeroCursos() {
  return (
    <section className="header__hero header__hero_cursos">
    <div className="header__hero__text">
      <h1 className="header__hero__text__title">Cursos de Formação!!!</h1>
      <p className="header__hero__text__description">
      Torne-se profissional conosco!!
      </p>
      <div className="header__hero__btn">
        <Link href="/#contact">
          <CustomButton className="header__hero__text__button-contato ">
          Entre em contato
          </CustomButton>
        </Link>
      </div>
    </div>
    
    <div class="curso__contain">
        <CustomImage
        className={"curso__image"}
        src="/Vector__cursos.png"
        alt={"Menina com Madeixas Feito no proprio salão"}
      />
        <p class="curso__text">Wessel Santos, hairstylist com 14 anos de experiência em cabelos afros. Aos 27 anos, se especializou em colorimetria e tratamentos capilares para cabelos cacheados. Venha com o Sell nessa jornada!!</p>
    </div>
    </section>
  );
}
