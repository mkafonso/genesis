import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  width: 96%;
  margin: auto;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 46px;

  > span {
    color: #fc714c;
    font-weight: bold;
    font-size: 2rem;
    cursor: pointer;
  }

  > div > a {
    & + a {
      margin-left: 1rem;
    }
  }
`;
