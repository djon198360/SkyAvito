import { useState } from "react";
import * as S from "./Style";
import * as B from "../Button/Button"

export const RenderNavBarComponent = () => {

  const [isAuth, setIsAuth] = useState(false);

  return (
    <S.Wrapper>
      <S.Container>
        <S.Header>
          <S.Nav><B.RenderButton onClick={() => { setIsAuth(true ?? false) }} type="button"> {isAuth ? `Выход из личный кабинет` : `Вход в личный кабинет`}</B.RenderButton></S.Nav>
        </S.Header>
        <S.Main>
          <S.MainSearch>
            <S.SearchLogoLink>
              <S.SearchLogoImg src="img/logo.png" />
            </S.SearchLogoLink>
          </S.MainSearch>
        </S.Main>
      </S.Container>
    </S.Wrapper>
  );
};
