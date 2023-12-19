
import {PropTypes} from "prop-types"
import * as S from "./Style";

export const RenderButtonHeader = ({ type, children, onClick }) =>
  (<S.ButtonHeader onClick={onClick} type={type}>{children}</S.ButtonHeader>)

RenderButtonHeader.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func,

}
RenderButtonHeader.defaultProps = {
  onClick: PropTypes.func,
  type: PropTypes.string.isRequired,

}
