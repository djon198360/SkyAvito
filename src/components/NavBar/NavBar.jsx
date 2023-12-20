import * as S from "./Style";

export const RenderNavBarComponent = () => {
  const arr = "Добавить объявление";
  return (
    <S.Wrapper>
      <S.Container>
        <S.Header>
          <S.Nav>{arr}</S.Nav>
        </S.Header>
      </S.Container>
    </S.Wrapper>
  );
};
