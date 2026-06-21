// Import

import Hero from "../components/hero";
import Resume from "../components/resume";
import Immersion from "../components/immersion";
import Footer from "../components/footer";

function Aschenveil() {
  return(
    <div>
      <Hero />
      <Resume />
      <h2 className="text-4xl font-bold mx-auto text-white uppercase text-center mt-20">les piliers du jeu</h2>
      <Immersion img="/exploration.png" title="Explorez le monde d'Aschenveil" text="Traversez les routes d'Aschenveil, découvrez ses peuples, ses cités et ses paysages. Derrière chaque horizon se cache une nouvelle histoire à vivre" inverse={false}/>
      <Immersion img="/choix.png" title="Faites face à des choix difficile" text="Chaque action que vous faites dans le monde d'Aschenveil a un prix mais également une récompense. Débloquez des compétences dans 3 voies différentes , choisissez en une ou faites un mélange de plusieurs voies. Libérez le plein potentiel de Flynn." inverse={true} />
      <Immersion img="/aide_ignore.png" title="aidez ou ignorez ceux dans le besoin" text="Gagnez la confiance des habitants du monde d'Aschenveil en remplissant des tâches quotidiennes ou des objectifs plus grands selon leur besoin. Montrez que vous êtes digne de la confiance des différents peuples , peut être que les habitants vous accorderont leur aimabilité et plus..." inverse={false}/>
      <Immersion img="/dilemme.png" title="Faites des compromis" text=" Chacun de vos choix vous ouvriront des portes mais fermeront l'accès à d'autres. Soyez méthodique et réfléchi dans la façon dont le monde d'Aschenveil vous perçoit" inverse={true}/>
      <Footer img="/hero.png"/>
    </div>
  )
}

export default Aschenveil;