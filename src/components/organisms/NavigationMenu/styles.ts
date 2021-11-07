import styled from 'styled-components';

export const Container = styled.aside`
  width: 15.625rem;
  height: 100vh;
  position: sticky;
  top: 0;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.background};

  > div.separator {
    border-bottom: 1px solid ${({ theme }) => theme.colors.details};
  }

  > svg {
    cursor: pointer;
    margin: 0.625rem 1rem;
  }
`;

export const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5rem 0;
  text-align: center;

  > h2 {
    font-size: 1.05rem;
  }
`;

export const UserAvatar = styled.div`
  width: 8.125rem;
  height: 8.125rem;
  border-radius: 50%;
  padding: 4px;
  margin-bottom: 12px;

  > img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    cursor: pointer;
    object-fit: cover;
  }
`;
