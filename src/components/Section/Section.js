import React from 'react';
import PropTypes from 'prop-types';
import { Paragraph, Heading } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <Paragraph>
      <Heading>{title}</Heading>
      {children}
    </Paragraph>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
