import styled from "styled-components";

export const Button = styled.button.attrs((props) => ({
  type: props.type,
}))`
  width: 224px;
  height: 40px;
  border: 1px solid #ffffff;
  border-radius: 6px;
  background-color: transparent;
  color: #ffffff;
  font-size: 16px;
  line-height: 1;
`;
