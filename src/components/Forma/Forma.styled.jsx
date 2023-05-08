import styled from '@emotion/styled';

export const Input = styled.input`
  width: 100%;
  height: 30px;
  border-radius: 5px;
  margin-top: 5px;
  margin-bottom: 10px;
  border: none;
  box-shadow: -2px 2px 4px 1px rgba(34, 60, 80, 0.37);
  outline: none;
  :hover,
  :focus {
    border: 1px solid #44d7ff;
  }
`;

export const FormBtn = styled.button`
  margin-top: 10px;
  font-size: 20px;
  padding: 10px;
  border-radius: 5px;
  border: none;
  box-shadow: -2px 2px 4px 1px rgba(34, 60, 80, 0.37);
  :hover {
    background-color: #e9e9e9;
  }
`;