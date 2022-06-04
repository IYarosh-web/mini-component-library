import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Wrapper = styled.div`
  position: relative;
  isolation: isolate;
  width: fit-content;

  --border-radius: 8px;
`;

const NativeSelect = styled.select`
  appearance: none;
  -webkit-appearance: none;
  position: absolute;
  z-index: 0;
  height: 100%;
  width: 100%;
  border: none;
  border-radius: var(--border-radius);
  opacity: 0;
`;

const FakeSelect = styled.div`
  width: 100%;
  height: 100%;
  pointer-events: none;
  background-color: ${COLORS.gray50};
  position: relative;
  padding: 12px 40px 12px 16px;
  border-radius: 8px;
  color: ${COLORS.gray700};

  ${Wrapper}:hover & {
    color: ${COLORS.black};
  }

  ${NativeSelect}:focus + & {
    outline: 2px solid ${COLORS.primary};
    outline: 2px solid -webkit-focus-ring-color;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  right: 8px;
  top: 8px;
`;

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <FakeSelect>
        {displayedValue}
        <IconWrapper>
          <Icon id="chevron-down" size={24} strokeWidth={2} />
        </IconWrapper>
      </FakeSelect>
    </Wrapper>
  );
};

export default Select;
