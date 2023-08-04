import React, { useState } from "react";
import { MdSearch } from 'react-icons/md'

import { Container, Logo, Title, Form, Input, Button } from "./styles";

import logo from '../../assets/github-logo.svg'

function MainPage() {
  const [login, setLogin] = useState('');

  return (
    <Container>
      <Logo src={logo} alt="API Github" />
      <Title>API GitHub</Title>
      <Form>
        <Input
          placeholder="usuário"
          value={login}
          onChange={(e) => setLogin(e.target.value)} />
        <Button to={`/${login}/repositories`}>
          <MdSearch size={42} />
        </Button>
      </Form>
    </Container>
  );
}

export default MainPage
