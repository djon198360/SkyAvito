import { useState } from "react";
import { RenderButtonHeader } from "../ButtonHeader/ButtonHeader";
import { ModalAuth } from "../../modal/ModalAuth";
import * as S from "./Style";

export const RenderHeader = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [isModal, setModal] = useState(false);

  return (
    <S.Header>
      <ModalAuth
        isVisible={isModal}
        title="Modal Title"
        content="u"
        footer={
          <RenderButtonHeader type="button" onClick={() => setModal(true)}>
            Cancel
          </RenderButtonHeader>
        }
        onClose={() => setModal(false)}
      />

      <S.Nav>
        {isAuth ? (
          <RenderButtonHeader
            onClick={() => {
              setIsAuth(false);
            }}
            type="button"
          >
            Разместить объявление
          </RenderButtonHeader>
        ) : (
          <RenderButtonHeader onClick={() => setModal(true)} type="button">
            Вход в личный кабинет
          </RenderButtonHeader>
        )}
      </S.Nav>
    </S.Header>
  );
};
