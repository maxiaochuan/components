import React, { useCallback } from 'react';
import type { SFC } from 'react';
import type { WidgetProps } from '@rjsf/core';
import { Radio } from 'antd';
import type { RadioGroupProps } from 'antd/es/radio';

const DEFAULT_ENUM_OPTIONS: any[] = [];
const DEFAULT_ENUM_DISABLED: any[] = [];

const RadioWidget: SFC<WidgetProps> = props => {
  const {
    autofocus,
    disabled,
    formContext,
    id,
    // label,
    // onBlur,
    onChange,
    // onFocus,
    options,
    // placeholder,
    readonly,
    // required,
    schema,
    value,
  } = props;
  const { readonlyAsDisabled = true } = formContext;

  const { enumOptions = DEFAULT_ENUM_OPTIONS, enumDisabled = DEFAULT_ENUM_DISABLED } = options;

  const handleChange = useCallback<Required<RadioGroupProps>['onChange']>(
    ({ target: { value: next } }) => onChange(schema.type === 'boolean' ? next !== 'false' : next),
    [onChange],
  );

  return (
    <Radio.Group
      disabled={disabled || (readonlyAsDisabled && readonly)}
      id={id}
      name={id}
      // onBlur={!readonly ? handleBlur : undefined}
      onChange={!readonly ? handleChange : undefined}
      // onFocus={!readonly ? handleFocus : undefined}
      value={`${value}`}
    >
      {(enumOptions as any[]).map(({ value: optionValue, label: optionLabel }, i) => (
        <Radio
          autoFocus={i === 0 ? autofocus : false}
          disabled={enumDisabled && (enumDisabled as any[]).includes(value)}
          key={`${optionValue}`}
          value={`${optionValue}`}
        >
          {optionLabel}
        </Radio>
      ))}
    </Radio.Group>
  );
};

export default RadioWidget;
