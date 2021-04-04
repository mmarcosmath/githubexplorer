import React, { useState, FormEvent } from "react";
import logoImg from "../../assets/logo.svg";
import { Title, Form, Logo, Repositories, Example } from "./styles";
import { FiChevronRight } from "react-icons/fi";

import api from "../../services/api";

interface Repository {
  name: string;
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [newSearch, setNewSearch] = useState("");
  const [repositories, setRepositories] = useState<Repository[]>([]);

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>
  ): Promise<void> {
    event.preventDefault();

    if (newSearch.includes("/")) {
      const response = await api.get<Repository>(`repos/${newSearch}`);
      const repository = response.data;
      setRepositories([repository]);
      console.log(repositories);
    } else {
      const response = await api.get<Repository[]>(`users/${newSearch}/repos`);
      const repository = response.data;
      setRepositories([...repository]);
      console.log(repositories);
    }
    setNewSearch("");
  }
  return (
    <>
      <Logo src={logoImg} alt="GitHub Explorer"></Logo>
      <Title>Explore repositórios no GitHub</Title>
      <Form onSubmit={handleAddRepository}>
        <input
          value={newSearch}
          onChange={(e) => setNewSearch(e.target.value)}
          placeholder="Digite o nome do repositório aqui..."
        />
        <button type="submit">Pesquisar</button>
      </Form>
      <Example>
        Ex: <strong>mmarcosmath/githubexplorer</strong> (para ir para o
        repositório)
      </Example>
      <Example>
        Ex: <strong>mmarcosmath</strong> (para listar os repositórios)
      </Example>
      <Repositories>
        {repositories.map((repository) => (
          <a key={repository.full_name} href="/repository">
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
            <FiChevronRight size={24} />
          </a>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
