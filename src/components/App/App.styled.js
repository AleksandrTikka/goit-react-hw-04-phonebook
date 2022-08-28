import styled from 'styled-components';

export const Btn = styled.button`
  padding: ${p => p.theme.space[2]}px ${p => p.theme.space[3]}px;
  min-width: 150px;
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.sm};
  background-color: ${p => p.theme.colors.bgButton};

  :hover,
  :focus {
    background-color: ${p => p.theme.colors.bgButtonHover};

    outline: ${p => p.theme.borders.bold};
    outline-color: ${p => p.theme.colors.heading};
  }
`;
