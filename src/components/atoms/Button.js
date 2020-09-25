import styled from 'styled-components';

const Button = styled.button`
  width: 70%;
  height: 70px;
  color: #fff;
  background-color: #212125;
  border: 0;
  border-radius: 10px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0;
  margin: 30px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 900;
  letter-spacing: 1px;
  font-family: 'Montserrat', sans-serif;
  z-index: -1;
  outline: none;
`;

export default Button;
