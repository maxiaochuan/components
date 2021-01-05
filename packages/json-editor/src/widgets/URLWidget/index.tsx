import React, { useCallback } from 'react';
import type { SFC, CSSProperties } from 'react';
import type { WidgetProps } from '@rjsf/core';
import { Input } from 'antd';
import type { InputProps } from 'antd/es/input';

const INPUT_STYLE: CSSProperties = {
  width: '100%',
};

const URLWidget: SFC<WidgetProps> = props => {
  const {
    // autofocus,
    disabled,
    formContext,
    id,
    // label,
    onBlur,
    onChange,
    onFocus,
    options,
    placeholder,
    readonly,
    // required,
    // schema,
    value,
  } = props;
  const { readonlyAsDisabled = true } = formContext;

  const handleChange = useCallback<Required<InputProps>['onChange']>(
    ({ target }) => onChange(target.value === '' ? options.emptyValue : target.value),
    [onChange],
  );

  const handleFocus = useCallback<Required<InputProps>['onFocus']>(
    ({ target }) => onFocus(id, target.value),
    [id, onFocus],
  );

  const handleBlur = useCallback<Required<InputProps>['onBlur']>(
    ({ target }) => onBlur(id, target.value),
    [id, onBlur],
  );

  return (
    <Input
      disabled={disabled || (readonlyAsDisabled && readonly)}
      id={id}
      name={id}
      onBlur={!readonly ? handleBlur : undefined}
      onChange={!readonly ? handleChange : undefined}
      onFocus={!readonly ? handleFocus : undefined}
      placeholder={placeholder}
      style={INPUT_STYLE}
      type="url"
      value={value}
    />
  );
};

export default URLWidget;
