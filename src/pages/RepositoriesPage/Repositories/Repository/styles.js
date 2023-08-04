import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: rgba(0, 0, 0, 0.25);
  border-left: solid 3px ${(props) => props.color || props.theme.colors.white};
  padding: 1rem;
`

export const Name = styled.h3`
  font-size: ${(props) => props.theme.fontSize.base};
  font-weight: normal;
  margin: 0 0 .5rem 0;
`

export const Description = styled.p`
  font-size: ${(props) => props.theme.fontSize.sm};
  line-height: 1rem;
  margin: .5rem 0;
`

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${(props) => props.color || props.theme.colors.white};
  font-size: ${(props) => props.theme.fontSize.sm};
`

export const Lang = styled.span`
  color: inherit;
`

export const Link = styled.a`
  color: inherit;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
`
