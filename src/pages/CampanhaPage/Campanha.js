import "../CampanhaPage/stylesCampanha.css";
import { useState } from "react";

import { Menu } from "../../components/Menu";
import { Title } from "../../components/Title";
import { Button } from "../../components/Button";
import CampanhaCreate from "./CampanhaCreate";
import CampanhaEdit from "./CampanhaEdit";

export default function Campanha() {
  const [createOpen, setCreateOpen] = useState(false);

  const [editOpen, setEditOpen] = useState(false);

  const [campanhaToEdit, setCampanhaToEdit] = useState();

  const [campanhas, setCampanhas] = useState([]);

  const handleOpenCreate = () => {
    setCreateOpen(true);
  };

  const handleCloseCreate = () => {
    setCreateOpen(false);
  };

  const handleOpenEdit = (item) => {
    setCampanhaToEdit(item);
    setEditOpen(true);
  };

  const handleCloseEdit = () => {
    setEditOpen(false);
  };

  const handleDelet = (campanha) => {
    setCampanhas(campanhas.filter((item) => item.nome !== campanha.nome));
  };

  return (
    <div className="home-container">
      <div className="bg">
        <div className="home">
          <div className="title-campanha">
            <Title text="Gerenciar Campanhas" />
          </div>
          <div className="cards-campanha">
            <Button
              className="btn-criar-campanha"
              type="button"
              id="criarCampanha"
              text="Criar Campanha"
              onClick={handleOpenCreate}
            />
            <div className="card-bg-campanha">
              <div id="tableClient" className="records">
                <thead>
                  <tr>
                    <th className="dados">Campanha</th>
                    <th className="dados">Mestre</th>
                    <th className="dados">Jogadores</th>
                    <th className="dados">Sistema</th>
                    <th className="dados">Ação</th>
                  </tr>
                  {campanhas.map((campanha) => (
                    <tr>
                      <td className="dados">{campanha.nome}</td>
                      <td className="dados">{campanha.mestre}</td>
                      <td className="dados">{campanha.jogadores}</td>
                      <td className="dados">{campanha.sistema}</td>
                      <td className="dados">
                        <div className="btns-wrap">
                          <Button
                            className="edit-btn"
                            onClick={() => handleOpenEdit(campanha)}
                            text="editar"
                          />
                          <Button
                            className="edit-btn"
                            onClick={() => handleDelet(campanha)}
                            text="excluir"
                          />
                        </div>
                      </td>
                    </tr>
                  ))}
                </thead>
              </div>
            </div>
          </div>
          {createOpen ? (
            <CampanhaCreate
              setCampanhas={setCampanhas}
              onClose={handleCloseCreate}
            />
          ) : null}
          {editOpen ? (
            <CampanhaEdit
              campanhaToEdit={campanhaToEdit}
              setCampanhas={setCampanhas}
              onClose={handleCloseEdit}
            />
          ) : null}
        </div>
      </div>
      <Menu />
    </div>
  );
}
