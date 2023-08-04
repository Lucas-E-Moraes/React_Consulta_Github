import React from 'react'
import PropTypes from 'prop-types'
import { MdGroup, MdLocationCity, MdWork, MdLink } from 'react-icons/md'
import { Container, Header, Login, Avatar, Name, Inner, Data } from './styles'

function index({ user }) {
  return (
    <Container>
      <Header>
        <Avatar src={`${user.avatar_url}`} />
        <Login>{user.login}</Login>
        <Name>{user.name}</Name>
      </Header>
      <Inner>
        <Data>
          <MdGroup />
          {user.followers}&nbsp;<i>seguindo</i>&nbsp;&middot; {user.following}&nbsp;<i>seguidores</i>
        </Data>
        {user.location && <Data>
          <MdLocationCity />
          {user.location}
        </Data>}
        {user.company && <Data>
          <MdWork />
          {user.company}
        </Data>}
        {user.blog &&<Data>
          <MdLink />
          <a href={`https://github.com/${user.login}`}>{user.blog}</a>
        </Data>}
      </Inner>
    </Container>
  )
}

index.propTypes = {
  user: PropTypes.shape({
    login: PropTypes.string.isRequired,
    name: PropTypes.string,
    avatar_url: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired,
    company: PropTypes.string,
    blog: PropTypes.string,
    location: PropTypes.string,
  }).isRequired
}

export default index
