import styled from "styled-components";

export default function Button({
  innerText = "",
  onClick = null,
  backgroundColor = "tomato",
  textColor = "white",
  disabled = false,
}) {
  return (
    <Btn
      onClick={onClick}
      $backgroundColor={backgroundColor}
      $textColor={textColor}
      disabled={disabled}
    >
      {innerText}
    </Btn>
  );
}

const Btn = styled.button`
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.textColor};
  border: none;
  border-radius: 25px;
  cursor: pointer;
  padding: 15px;
  margin: 10px;

  &:hover {
    filter: brightness(0.95);
  }
`;
