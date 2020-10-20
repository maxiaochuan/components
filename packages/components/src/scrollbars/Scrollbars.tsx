import React, { forwardRef, useCallback, useMemo } from 'react';
import { ScrollbarProps as ComponentProps, Scrollbars as Component } from 'react-custom-scrollbars';
import { forceCheck } from 'react-lazyload';
import { useCoreConfig } from '../core-provider/context';

export interface ScrollbarsProps extends Omit<ComponentProps, 'ref'> {
  forceCheckLazyload?: boolean;
}

/**
 * @description
 * @author Maxiaochuan <mxcins@gmail.com>
 * @date 21-08-2020
 * @param {ScrollbarsProps} props
 * @returns {*}
 */
const Scrollbars = forwardRef<Component, ScrollbarsProps>((props, ref) => {
  const {
    scrollbars: { forceCheckLazyload: coreForceCheckLazyload },
  } = useCoreConfig();
  const { onScrollStop, forceCheckLazyload, ...rest } = props;

  const check = useMemo(
    () => (typeof forceCheckLazyload === 'undefined' ? coreForceCheckLazyload : forceCheckLazyload),
    [forceCheckLazyload, coreForceCheckLazyload],
  );

  const onStop = useCallback(() => {
    if (onScrollStop) {
      onScrollStop();
    }
    if (check) {
      forceCheck();
    }
  }, [onScrollStop, check]);

  return <Component ref={ref} onScrollStop={onStop} {...rest} />;
});

Scrollbars.defaultProps = {};

export default Scrollbars;
