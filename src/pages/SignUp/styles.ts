import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: calc(100vh - 46px);
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  > form {
    text-align: center;
    max-width: 400px;
    width: 100%;
    height: max-content;
    margin: 0 auto;
    background: #ffffff;
    border-radius: 10px;
    padding: 20px 10px;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.05);

    > h2 {
      margin-bottom: 16px;
    }
  }
`;

export const PreviewUploadedAvatar = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.secondary};
  margin: 1rem auto;

  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: #ffffff;
  cursor: pointer;
`;

export const Input = styled.input`
  width: 100%;
  height: 45px;
  border: none;
  outline: none;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 0 16px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.primary};
  }

  & + input {
    margin-top: 0.5rem;
  }
`;

export const Button = styled.button`
  margin-top: 1rem;
  width: 100%;
  height: 45px;
  color: ${({ theme }) => theme.colors.background};
  background: ${({ theme }) => theme.colors.secondary};
  font-weight: bold;
  border: none;
  border-radius: 5px;
`;
