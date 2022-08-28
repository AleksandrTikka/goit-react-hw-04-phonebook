import React from 'react';
import PropTypes from 'prop-types';
import { SectionCont } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <SectionCont>
      <h2>{title}</h2>
      {children}
    </SectionCont>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Section;
