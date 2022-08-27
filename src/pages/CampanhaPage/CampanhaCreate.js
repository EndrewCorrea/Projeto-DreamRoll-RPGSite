import { useState } from "react";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

const CampanhaCreate = ({ setCampanhas, onClose }) => {
  const [nome, setNome] = useState("");
  const [mestre, setMestre] = useState("");
  const [jogadores, setCelular] = useState("");
  const [sistema, setSistema] = useState("");

  const handleCreateCampanha = () => {
    const campanha = { nome, mestre, jogadores, sistema };
    setCampanhas((oldValue) => [...oldValue, campanha]);

    setNome("");
    setMestre("");
    setCelular("");
    setSistema("");
    onClose();
  };
  return (
    <div className="modal" id="modal">
      <header className="modal-header">
        <span className="modal-close" id="modalClose">
          &#10006;
        </span>
      </header>
      <div className="modal-content">
        <div id="form" className="modal-form">
          <h2 className="title-modal">Nova Campanha</h2>
          <div className="input-bg">
            <Input
              className="modal-field"
              data-index="new"
              id="nome"
              type="text"
              label="Nome da Campanha:"
              value={nome}
              onChange={setNome}
            />
          </div>
          <div className="input-bg">
            <Input
              className="modal-field"
              data-index="new"
              id="mestre"
              type="mestre"
              label="Mestre:"
              value={mestre}
              onChange={setMestre}
            />
          </div>
          <div className="input-bg">
            <Input
              className="modal-field"
              data-index="new"
              id="jogadores"
              type="number"
              label="Numero de Jogadores:"
              value={jogadores}
              onChange={setCelular}
            />
          </div>
          <div className="input-bg">
            <Input
              className="modal-field"
              data-index="new"
              id="sistema"
              type="Text"
              label="Sistema:"
              value={sistema}
              onChange={setSistema}
            />
          </div>
          <footer className="modal-footer">
            <Button
              id="salvar"
              className="button-save"
              onClick={handleCreateCampanha}
              text="Salvar"
            />
            <Button
              id="cancelar"
              className="button-cancelar"
              onClick={onClose}
              text="Cancelar"
            />
          </footer>
        </div>
      </div>
    </div>
  );
};

export default CampanhaCreate;
