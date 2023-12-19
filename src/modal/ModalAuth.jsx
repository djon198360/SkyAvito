import { useEffect, useState } from "react";
import { PropTypes } from "prop-types";
import { RenderInput } from "../components/Form/input";
import * as S from "./style";

export const ModalAuth = ({
  isVisible = false,
  title,
  content,
  footer,
  onClose,
}) => {
  const keydownHandler = ({ key }) => {
    switch (key) {
      case "Escape":
        onClose();
        break;
      default:
    }
  };
  const [loginValue, setLoginValue] = useState("");
  useEffect(() => {
    document.addEventListener("keydown", keydownHandler);
    return () => document.removeEventListener("keydown", keydownHandler);
  }, []);

  return !isVisible ? null : (
    <S.Modal onClick={onClose}>
      <S.ModalDialog onClick={(e) => e.stopPropagation()}>
        <S.ModalHeader>
          <S.ModalTitle>{title}</S.ModalTitle>
          <S.ModalClose onClick={onClose} />
        </S.ModalHeader>
        <S.ModalBody>
          <S.ModalContent>
            <RenderInput
              type="text"
              placeholder="Login"
              name="login"
              value={loginValue}
              onChange={(e) => {
                setLoginValue(e.target.value);
              }}
            />
            {content}
          </S.ModalContent>
        </S.ModalBody>
        {footer && <S.ModalFooter>{footer}</S.ModalFooter>}
      </S.ModalDialog>
    </S.Modal>
  );
};
ModalAuth.propTypes = {
  isVisible: PropTypes.bool,
  title: PropTypes.string,
  content: PropTypes?.string,
  footer: PropTypes.element,
  onClose: PropTypes.func,
};
ModalAuth.defaultProps = {
  isVisible: PropTypes.false,
  title: PropTypes.null,
  content: PropTypes?.string,
  footer: PropTypes.null,
  onClose: PropTypes.func,
};
