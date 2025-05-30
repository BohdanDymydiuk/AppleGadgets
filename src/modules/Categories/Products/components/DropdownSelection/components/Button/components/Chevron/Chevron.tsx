/* eslint-disable max-len */
import React from 'react';

import SCSSVariables from '../../../../../../../../../utils/Variables.module.scss';

interface Props {
  isFocused: boolean;
}

export const Chevron: React.FC<Props> = ({ isFocused }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.4717 5.52864C12.7321 5.78899 12.7321 6.2111 12.4717 6.47145L8.47173 10.4714C8.21138 10.7318 7.78927 10.7318 7.52892 10.4714L3.52892 6.47144C3.26857 6.2111 3.26857 5.78899 3.52892 5.52864C3.78927 5.26829 4.21138 5.26829 4.47173 5.52864L8.00033 9.05723L11.5289 5.52864C11.7893 5.26829 12.2114 5.26829 12.4717 5.52864Z"
        fill={isFocused ? SCSSVariables.lightGreenColor : '#B4BDC4'}
        style={{ transition: `fill ${SCSSVariables.defaultTransDur}` }}
      />
    </svg>
  );
};
