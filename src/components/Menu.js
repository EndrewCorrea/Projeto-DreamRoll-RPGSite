import perfil from "../assets/perfil.png";
import personagem from "../assets/personagem.png";
import home from "../assets/home.png";
import campanha from "../assets/campanha.png";
import sobre from "../assets/sobre.png";
import settings from "../assets/settings.png";

import { Title } from "../components/Title";
import { Icons } from "../components/Icons";
import { Button3 } from "../components/Button3";

export const Menu = ({ text }) => {
  return (
    <div className="menu-bg">
      <div className="perfil">
        <Icons img={perfil} />
        <Title text="Endrew Corrêa" />
      </div>
      <div className="menu-bg-up">
        <div className="container-menu">
          <div className="menu">
            <Button3 img={home} text="Inicio" />

            <Button3 img={campanha} text="Gerenciar Campanhas" />

            <Button3 img={personagem} text="Gerenciar Personagens" />

            <Button3 img={sobre} text="Sobre" />
          </div>
          <div className="menu-config">
            <Button3 img={settings} text="Configurações" />
          </div>
        </div>
      </div>
    </div>
  );
};
