import styled from "styled-components";

export const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`

export const Container = styled.div`
  display: flex;
  min-height: 100vh;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    flex-direction: column;
    min-height: auto;
  }
`;

export const SideBar = styled.aside`
  background: ${(props) => props.theme.colors.gray900};
  min-width: 20rem;
  max-height: 100vh;
  overflow-y: hidden;
`

export const Main = styled.section`
  background: ${(props) => props.theme.colors.container};
  width: 100%;
  height: calc(100vh - 80px);
  overflow-y: hidden;
  padding: 40px;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    width: calc(100% - 5rem);
    height: 100%;
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints.sm}) {
    width: calc(100% - 2.5rem);
    padding: 40px 20px;
  }
`

export const Title = styled.h2`
  margin: 0 0 2rem 0;
`
