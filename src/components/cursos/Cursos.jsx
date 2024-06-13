import "./cursos.css"
import CustomButton from "../customButton/CustomButton";
import CustomImage from "../customImage/CustomImage";

export default function Cursos(){
    return(
        <section className="cursos">
            <h2 className="cursos__title">Saiba mais sobre nossos cursos!</h2>
            <div className="cursos__container">
                <div className="curso">
                    <CustomImage src={"/cursos/colorimetria.png"}/>
                    <h3 className="curso_title">Formação de Colorimetria</h3>
                    <p>Aprenda técnicas avançadas de coloração e correção de tons, dominando os princípios da teoria das cores aplicados aos cabelos.</p>
                    <CustomButton>Entre em contato</CustomButton>
                </div>
                <div className="curso">
                    <CustomImage src={"/cursos/colorimetria.png"}/>
                    <h3 className="curso_title">Formação para Iniciantes</h3>
                    <p>Prepare-se para uma jornada emocionante no mundo da beleza e do cabelo com o nosso curso para iniciantes em cabelereiro</p>
                    <CustomButton>Entre em contato</CustomButton>
                </div>
            </div>
        </section>
    )
}