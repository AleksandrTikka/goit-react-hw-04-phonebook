import styled from 'styled-components';

export const Label = styled.label`
  //   display: flex;
  //   justify-content: space-between;
  //   align-items: center;
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.bold};

  color: ${p => p.theme.colors.accent};

  :not(:last-child) {
    margin-bottom: ${p => p.theme.space[3]}px;
  }
`;

export const Error = styled.div`
  margin-bottom: ${p => p.theme.space[4]}px;
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.normal};
  color: ${p => p.theme.colors.heading};
`;
