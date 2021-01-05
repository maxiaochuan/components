import React, { useCallback } from 'react';
import type { SFC, CSSProperties } from 'react';
import type { WidgetProps } from '@rjsf/core';
import { Input } from 'antd';
import type { TextAreaProps } from 'antd/es/input';

const INPUT_STYLE: CSSProperties = {
  width: '100%',
};

const TextareaWidget: SFC<WidgetProps> = props => {
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

  const handleChange = useCallback<Required<TextAreaProps>['onChange']>(
    ({ target }) => onChange(target.value === '' ? options.emptyValue : target.value),
    [],
  );

  const handleFocus = useCallback<Required<TextAreaProps>['onFocus']>(
    ({ target }) => onFocus(id, target.value),
    [id, onFocus],
  );

  const handleBlur = useCallback<Required<TextAreaProps>['onBlur']>(
    ({ target }) => onBlur(id, target.value),
    [id, onBlur],
  );

  return (
    <Input.TextArea
      disabled={disabled || (readonlyAsDisabled && readonly)}
      id={id}
      name={id}
      onBlur={!readonly ? handleBlur : undefined}
      onChange={!readonly ? handleChange : undefined}
      onFocus={!readonly ? handleFocus : undefined}
      placeholder={placeholder}
      rows={(options.rows as number) || 4}
      style={INPUT_STYLE}
      value={value}
    />
  );
};

export default TextareaWidget;
