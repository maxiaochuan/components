import React, { useCallback } from 'react';
import type { SFC, CSSProperties } from 'react';
import type { WidgetProps } from '@rjsf/core';
import { Input, InputNumber } from 'antd';
import type { InputNumberProps } from 'antd/es/input-number';
import type { InputProps } from 'antd/es/input';

const INPUT_STYLE: CSSProperties = {
  width: '100%',
};

const TextWidget: SFC<WidgetProps> = props => {
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
    schema,
    value,
  } = props;
  const { readonlyAsDisabled = true } = formContext;

  const handleNumberChange = useCallback<Required<InputNumberProps>['onChange']>(v => onChange(v), [
    onChange,
  ]);

  const handleTextChange = useCallback<Required<InputProps>['onChange']>(
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

  return schema.type === 'number' || schema.type === 'integer' ? (
    <InputNumber
      disabled={disabled || (readonlyAsDisabled && readonly)}
      id={id}
      name={id}
      onBlur={!readonly ? handleBlur : undefined}
      onChange={!readonly ? handleNumberChange : undefined}
      onFocus={!readonly ? handleFocus : undefined}
      placeholder={placeholder}
      style={INPUT_STYLE}
      type="number"
      value={value}
      min={schema.minimum}
      max={schema.maximum}
    />
  ) : (
    <Input
      disabled={disabled || (readonlyAsDisabled && readonly)}
      id={id}
      name={id}
      onBlur={!readonly ? handleBlur : undefined}
      onChange={!readonly ? handleTextChange : undefined}
      onFocus={!readonly ? handleFocus : undefined}
      placeholder={placeholder}
      style={INPUT_STYLE}
      type={(options.inputType as string) || 'text'}
      value={value}
    />
  );
};

export default TextWidget;
