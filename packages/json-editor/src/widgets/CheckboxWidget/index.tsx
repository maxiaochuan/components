import React, { useCallback } from 'react';
import type { SFC } from 'react';
import type { WidgetProps } from '@rjsf/core';
import { Checkbox } from 'antd';
import type { CheckboxProps } from 'antd/es/checkbox';

const CheckboxWidget: SFC<WidgetProps> = props => {
  const {
    autofocus,
    disabled,
    formContext,
    id,
    label,
    // onBlur,
    onChange,
    // onFocus,
    // options,
    // placeholder,
    readonly,
    // required,
    // schema,
    value,
  } = props;
  const { readonlyAsDisabled = true } = formContext;

  const handleChange = useCallback<Required<CheckboxProps>['onChange']>(
    ({ target }) => onChange(target.checked),
    [onChange],
  );

  return (
    <Checkbox
      autoFocus={autofocus}
      checked={typeof value === 'undefined' ? false : value}
      disabled={disabled || (readonlyAsDisabled && readonly)}
      id={id}
      name={id}
      onChange={!readonly ? handleChange : undefined}
    >
      {label}
    </Checkbox>
  );
};

export default CheckboxWidget;
