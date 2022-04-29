import styled from 'styled-components';

export const Container = styled.div`
  padding: ${({ theme }) => theme.size(2)};
  color: ${({ theme }) => theme.color.background};
  background: ${({ theme }) => theme.color.text};
`;
