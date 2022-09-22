import CardFeature from "./Card-feature";
import "./Feature.css";
function Feature(){
    return(
    <section id="feature">

        <h4>Razones por las que disfrutarás quedarte con nosotros</h4>
        <div className="feature-row">
            <CardFeature texto='Reserbas' background={true} icono='fa-solid fa-bell-concierge'></CardFeature>
            <CardFeature texto='Habitaciones' background={false} icono='fa-solid fa-bed'></CardFeature>
            <CardFeature texto='Wi-Fi' background={true} icono='fa-solid fa-wifi'></CardFeature>
            <CardFeature texto='Gimnasio' background={false} icono='fa-solid fa-dumbbell'></CardFeature>
        </div>
    </section>

    );

}

export default Feature;