import * as S from "./Style";

export const RenderCard = () => {
  const title = "Ракетка для большого тенниса Triumph Pro ST";
  const price = "2 200";
  const place = "Санкт Петербург";
  const date = "Сегодня в 10:45";
  return (
    <S.BlockCard>
      <S.CardItem>
        <S.CardBody>
          <S.CardImage>
            <S.A>
              <S.Image src="1.jpg" alt={title} />
            </S.A>
          </S.CardImage>
          <S.CardContent>
            <S.A>
              <S.CardTitleH3>{title}</S.CardTitleH3>
            </S.A>
            <S.CardPrice>{price} ₽</S.CardPrice>
            <S.CardPlace>{place}</S.CardPlace>
            <S.CardDate>{date}</S.CardDate>
          </S.CardContent>
        </S.CardBody>
      </S.CardItem>
    </S.BlockCard>
  );
};
