import { RenderHeader } from "../../components/Header/Heder"
import { RenderSearch } from "../../components/SearchBlock/Search";
import { RenderCard } from "../../components/Card/Card";
import { RenderFooter } from "../../components/Footer/Footer";
import * as S from "./Style";

export const Main = () => (
  <S.Wrapper>
    <S.Container>
      <RenderHeader />
      <S.Main>
        <RenderSearch />

        <S.MainContainer>
          <S.H2>Объявления</S.H2>
          <S.MainContent>

            <RenderCard/>

          </S.MainContent>
        </S.MainContainer>

      </S.Main>

      <RenderFooter />
    </S.Container>
  </S.Wrapper>
);
