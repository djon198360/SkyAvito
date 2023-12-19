import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  overflow: hidden;
  background-color: #f1f1f1;
  display: flex;
  flex-direction: column;
`;
export const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  background-color: #ffffff;
`;


export const Main = styled.main``;

export const MainContainer = styled.main`
  max-width: 1178px;
  margin: 0 auto;
  padding: 52px 10px 37px;
`;

export const MainSearch = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 11px 0;
  max-width: 1178px;
  margin: 0 auto;
  padding: 31px 10px 0px;
`;

export const SearchLogoLink = styled.a`
  display: none;
`;

export const SearchLogoImg = styled.img.attrs((props) => ({
  src: props.src,
 
}))`
  width: 54px;
  height: auto;
`;
