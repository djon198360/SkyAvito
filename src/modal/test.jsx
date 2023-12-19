import { useEffect } from "react";
import { PropTypes } from "prop-types";
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
          <S.ModalContent>{content}</S.ModalContent>
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
