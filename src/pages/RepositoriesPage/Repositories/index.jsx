import React from 'react'
import PropTypes from 'prop-types'
import Repository from './Repository'
import { Container } from './styles'

function index({ repositories, currentLanguage }) {
  return (
    <Container>
      {repositories.filter((repository) => currentLanguage === undefined || repository.language === currentLanguage).map((repository) => (
        <Repository key={repository.id} repository={repository} />
      ))}
    </Container>
  )
}

index.defaultProps = {
  currentLanguage: undefined,
}

index.propTypes = {
  repositories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      html_url: PropTypes.string.isRequired,
      language: PropTypes.string,
    }).isRequired
  ).isRequired,
  currentLanguage: PropTypes.string,
}

export default index
