/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  "small": {
    "--height": "8px",
    "--padding": "initial",
    "--border-radius": "4px",
  },
  "medium": {
    "--height": "12px",
    "--padding": "initial",
    "--border-radius": "4px",
  },
  "large": {
    "--height": "24px",
    "--padding": "4px",
    "--border-radius": "8px",
  }
}

const Wrapper = styled.progress`
  -webkit-appearance: none;
  appearance: none;
  height: var(--height);

  &[value]::-webkit-progress-inner-element {
    height: var(--height);
    padding: var(--padding);
    border-radius: var(--border-radius);

    overflow: hidden;
    background-color: ${COLORS.transparentGray15};
    box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  }

  &[value]::-webkit-progress-bar {
    overflow: hidden;
    background-color: transparent;
    border-radius: 4px;
  }

  &[value]::-webkit-progress-value {
    background-color: ${COLORS.primary}
  }
`;

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];
  return (
    <Wrapper
      style={styles}
      min="0"
      max="100"
      value={+value}

      role="progressbar"
      aria-valuemin="0"
      aria-valuemax="100"
      aria-valuenow={value}
    >
      <VisuallyHidden>{value}%</VisuallyHidden>
    </Wrapper>
  );
};

export default ProgressBar;
