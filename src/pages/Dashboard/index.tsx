import React, { useState, FormEvent, useEffect } from "react";
import logoImg from "../../assets/logo.svg";
import { Title, Form, Logo, Repositories, Example, Error } from "./styles";
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
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storageRepositories = localStorage.getItem(
      "@GithubExplorer:repositories"
    );

    if (storageRepositories) {
      return JSON.parse(storageRepositories);
    }
    return [];
  });
  const [inputError, setInputError] = useState("");

  useEffect(() => {
    localStorage.setItem(
      "@GithubExplorer:repositories",
      JSON.stringify(repositories)
    );
  }, [repositories]);

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>
  ): Promise<void> {
    event.preventDefault();

    if (!newSearch) {
      setInputError("Digite algo para pesquisar.");
      return;
    }

    try {
      if (newSearch.includes("/")) {
        const response = await api.get<Repository>(`repos/${newSearch}`);
        const repository = response.data;
        setRepositories([repository]);
        console.log(repositories);
      } else {
        const response = await api.get<Repository[]>(
          `users/${newSearch}/repos`
        );
        const repository = response.data;
        setRepositories([...repository]);
        console.log(repositories);
      }
      setNewSearch("");
      setInputError("");
    } catch (Err) {
      setInputError("Erro na busca por este autor ou repositorio.");
    }
  }
  return (
    <>
      <Logo src={logoImg} alt="GitHub Explorer"></Logo>
      <Title>Explore repositórios no GitHub</Title>
      <Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <input
          value={newSearch}
          onChange={(e) => setNewSearch(e.target.value)}
          placeholder="Digite o nome do repositório aqui..."
        />
        <button type="submit">Pesquisar</button>
      </Form>
      {inputError && <Error>{inputError}</Error>}
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
