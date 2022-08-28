import styled from 'styled-components';

export const Paragraph = styled.div`
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;
`;

export const Heading = styled.h2`
  margin-top: ${p => p.theme.space[4]}px;
  margin-bottom: ${p => p.theme.space[4]}px;
`;
