import React from "react";
import logoImg from "../../assets/logo.svg";
import { Title, Form, Logo, Repositories } from "./styles";
import { FiChevronRight } from "react-icons/fi";
const Dashboard: React.FC = () => {
  return (
    <>
      <Logo src={logoImg} alt="GitHub Explorer"></Logo>
      <Title>Explore repositórios no GitHub</Title>
      <Form>
        <input placeholder="Digite o nome do repositório aqui..." />
        <button type="submit">Pesquisar</button>
      </Form>
      <Repositories>
        <a href="/repository">
          <img
            src="https://avatars.githubusercontent.com/u/61097887?v=4"
            alt="Marcos Matheus"
          />
          <div>
            <strong>mmarcosmath/githubexplorer</strong>
            <p>Aplicação GitHub Explorer feita em ReactJS</p>
          </div>
          <FiChevronRight size={24} />
        </a>
        <a href="/repository">
          <img
            src="https://avatars.githubusercontent.com/u/61097887?v=4"
            alt="Marcos Matheus"
          />
          <div>
            <strong>mmarcosmath/githubexplorer</strong>
            <p>Aplicação GitHub Explorer feita em ReactJS</p>
          </div>
          <FiChevronRight size={24} />
        </a>
        <a href="/repository">
          <img
            src="https://avatars.githubusercontent.com/u/61097887?v=4"
            alt="Marcos Matheus"
          />
          <div>
            <strong>mmarcosmath/githubexplorer</strong>
            <p>Aplicação GitHub Explorer feita em ReactJS</p>
          </div>
          <FiChevronRight size={24} />
        </a>
        <a href="/repository">
          <img
            src="https://avatars.githubusercontent.com/u/61097887?v=4"
            alt="Marcos Matheus"
          />
          <div>
            <strong>mmarcosmath/githubexplorer</strong>
            <p>Aplicação GitHub Explorer feita em ReactJS</p>
          </div>
          <FiChevronRight size={24} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
