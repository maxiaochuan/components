import React, { useCallback } from 'react';
import type { SFC, CSSProperties } from 'react';
import type { WidgetProps } from '@rjsf/core';
import { InputNumber } from 'antd';
import { InputNumberProps } from 'antd/es/input-number';

const INPUT_STYLE: CSSProperties = {
  width: '100%',
};

const UpDownWidget: SFC<WidgetProps> = props => {
  const {
    // autofocus,
    disabled,
    formContext,
    id,
    onBlur,
    onChange,
    onFocus,
    // options,
    placeholder,
    readonly,
    // required,
    // schema,
    value,
  } = props;
  const { readonlyAsDisabled = true } = formContext;

  const handleChange = useCallback<Required<InputNumberProps>['onChange']>(v => onChange(v), [
    onChange,
  ]);

  const handleFocus = useCallback<Required<InputNumberProps>['onFocus']>(
    ({ target }) => onFocus(id, target.value),
    [id, onFocus],
  );

  const handleBlur = useCallback<Required<InputNumberProps>['onBlur']>(
    ({ target }) => onBlur(id, target.value),
    [id, onBlur],
  );

  return (
    <InputNumber
      disabled={disabled || (readonlyAsDisabled && readonly)}
      id={id}
      name={id}
      onBlur={!readonly ? handleBlur : undefined}
      onChange={!readonly ? handleChange : undefined}
      onFocus={!readonly ? handleFocus : undefined}
      placeholder={placeholder}
      style={INPUT_STYLE}
      type="number"
      value={value}
    />
  );
};

export default UpDownWidget;
