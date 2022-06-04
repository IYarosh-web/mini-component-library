import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  "small": {
    "--font-size": "14px",
    "--border-width": "1px",
    "--height": "24px",
    iconSize: 16,
    iconStroke: 1,
  },
  "large": {
    "--font-size": "18px",
    "--border-width": "2px",
    "--height": "32px",
    iconSize: 24,
    iconStroke: 2,
  }
}

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  const styles = STYLES[size];
  return (
    <Wrapper style={{
      ...styles,
      '--width': width + 'px',
      '--icon-size': styles.iconSize + 'px'
    }}>
      <VisuallyHidden>
        <label>{label}</label>
      </VisuallyHidden>
      <Input placeholder={placeholder} />
      <IconWrapper>
        <Icon
          id={icon}
          size={styles.iconSize}
          strokeWidth={styles.iconStroke}
        />
      </IconWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  height: var(--height);
  width: var(--width);

  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const Input = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  font-size: var(--font-size);
  font-weight: bold;

  border: none;
  border-bottom: var(--border-width) solid ${COLORS.black};
  padding-left: var(--height);
  outline-offset: 2px;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: normal;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  height: var(--icon-size);
  margin: auto;
  pointer-events: none;
`;

export default IconInput;
