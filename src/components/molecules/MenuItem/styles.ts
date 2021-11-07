import styled from 'styled-components';

export const Container = styled.div`
  &:first-child {
    padding-top: 1rem;
  }

  > a {
    padding: 0.625rem 1rem;
    width: 100%;
    display: block;
    position: relative;
    transition: all 0.3s ease-out;
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.background};

    > svg {
      margin-right: 1rem;
    }
  }
`;
