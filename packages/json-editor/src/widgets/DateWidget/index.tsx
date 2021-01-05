import React, { useCallback } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import type { SFC, CSSProperties } from 'react';
import type { WidgetProps } from '@rjsf/core';
import type { PickerProps } from 'antd/lib/date-picker/generatePicker';
import { DatePicker } from '../../components';

type RequiredPickerProps = Required<PickerProps<Dayjs>>;

const DATE_PICKER_STYLE: CSSProperties = {
  width: '100%',
};

const DateWidget: SFC<WidgetProps> = props => {
  const {
    // autofocus,
    disabled,
    formContext,
    id,
    // label,
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

  const handleChange = useCallback<RequiredPickerProps['onChange']>(
    next => onChange(next?.format('YYYY-MM-DD')),
    [id, value, onFocus],
  );

  const handleFocus = useCallback<RequiredPickerProps['onFocus']>(() => {
    return onFocus(id, value);
  }, [id, value, onFocus]);

  const handleBlur = useCallback<RequiredPickerProps['onBlur']>(() => {
    return onBlur(id, value);
  }, [id, value, onBlur]);

  const getPopupContainer = useCallback<RequiredPickerProps['getPopupContainer']>(
    node => node.parentNode as HTMLElement,
    [],
  );

  return (
    <DatePicker
      disabled={disabled || (readonlyAsDisabled && readonly)}
      getPopupContainer={getPopupContainer}
      id={id}
      name={id}
      onBlur={!readonly ? handleBlur : undefined}
      onChange={!readonly ? handleChange : undefined}
      onFocus={!readonly ? handleFocus : undefined}
      placeholder={placeholder}
      showTime={false}
      style={DATE_PICKER_STYLE}
      value={value && dayjs(value)}
    />
  );
};

export default DateWidget;
