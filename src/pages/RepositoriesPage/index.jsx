import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import { Container, Main, SideBar, Title, Loading } from './styles'
import Profile from "./Profile"
import Filter from "./Filter"
import Repositories from "./Repositories"
import { getUser, getLangsFrom, getRepo } from "../../services/api";

function index() {
  const { login } = useParams()
  const [user, setUser] = useState()
  const [repositories, setRepositories] = useState()
  const [languages, setLanguages] = useState()
  const [currentLanguage, setCurrentLanguage] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadData = async () => {
      const [userResponse, repoResponse] = await Promise.all([
        getUser(login),
        getRepo(login),
      ])
      // Tonny221
      setUser(userResponse.data);
      setRepositories(repoResponse.data);
      setLanguages(getLangsFrom(repoResponse.data))
      setLoading(false);
    }
    loadData();
  }, [])

  if(loading) {
    return <Loading>Carregando...</Loading>
  }

  return (
    <Container>
      <SideBar>
        <Profile user={user} />
        <Filter
          currentLanguage={currentLanguage}
          onClick={setCurrentLanguage}
          languages={languages} />
      </SideBar>
      <Main>
        <Title>Repositorios</Title>
        <Repositories
          currentLanguage={currentLanguage}
          repositories={repositories} />
      </Main>
    </Container>
  );
}

export default index
