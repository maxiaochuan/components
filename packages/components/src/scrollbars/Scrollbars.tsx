import React, { SFC, useCallback } from 'react';
import {
  ScrollbarProps as ScrollbarsProps,
  Scrollbars as Component,
} from 'react-custom-scrollbars';
import { forceCheck } from 'react-lazyload';

export type { ScrollbarProps as ScrollbarsProps } from 'react-custom-scrollbars';

/**
 * @description
 * @author Maxiaochuan <mxcins@gmail.com>
 * @date 21-08-2020
 * @param {ScrollbarsProps} props
 * @returns {*}
 */
const Scrollbars: SFC<ScrollbarsProps> = props => {
  const { onScrollStop, ...rest } = props;

  const onStop = useCallback(() => {
    if (onScrollStop) {
      onScrollStop();
    }
    forceCheck();
  }, [onScrollStop]);

  return <Component onScrollStop={onStop} {...rest} />;
};

export default Scrollbars;
