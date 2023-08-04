import React from 'react'
import PropTypes from 'prop-types'
import { Container, Selector, Cleaner } from './styles'

function index({ languages, currentLanguage, onClick }) {
  return (
    <Container>
      {languages.map(({name, count, color}) => (
        <Selector key={name.toLowerCase()} color={color} className={currentLanguage === name ? 'selected' : ''}
        onClick={() => onClick && onClick(name)}>
          <span>{name}</span>
          <span>{count}</span>
        </Selector>
      ))}
      <Cleaner onClick={() => onClick && onClick(undefined)}>
        Limpar
      </Cleaner>
    </Container>
  )
}

index.defaulProps = {
  currentLanguage: null,
  onClick: null,
}

index.propTypes = {
  languages: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      count: PropTypes.number.isRequired,
      color: PropTypes.string,
    }).isRequired
  ).isRequired,
  currentLanguage: PropTypes.string,
  onClick: PropTypes.func,
}

export default index
