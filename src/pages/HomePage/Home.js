import "../HomePage/stylesHome.css";

import { Title } from "../../components/Title";
import { Menu } from "../../components/Menu";
import { Card } from "../../components/Card";

export default function Home() {
  return (
    <div className="home-container">
      <div className="bg">
        <div className="home">
          <div className="home-title">
            <Title text="Inicio" />
          </div>
          <Card
            title="Atualizações"
            text="Gerenciamento de campanhas esta disponivel!"
          />
          <Card
            title="Proximas Atualizações"
            text="Gerenciamento de Personagens"
          />
        </div>
      </div>
      <Menu />
    </div>
  );
}
