import styled from 'styled-components'

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;

  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px;
    margin-bottom: 20px;
  }
`

export const LogoContainer = styled.div`
  padding-left:10px;
`

export const LogoLink = styled.a`
  height: 100%;
  width: 70px;
  cursor: pointer;

  @media screen and (max-width: 800px) {
    width: 50px;
    padding: 0;
  }
`

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 800px) {
    width: 80%;
  }
`

export const OptionLink = styled.a`
  padding: 10px 15px;
  cursor: pointer;
`
