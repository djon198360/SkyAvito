import styled from "styled-components";

export const ButtonHeader = styled.button.attrs((props) => ({
  type: props.type,
}))`
  width: 224px;
  height: 40px;
  border: 1px solid #ffffff;
  border-radius: 6px;
  background-color: #009EE4;/* transparent; */
  color: #ffffff;
  font-size: 16px;
  line-height: 1;
  &:hover{
    background:rgba(255, 255, 255, 0.15);
  }
`;
