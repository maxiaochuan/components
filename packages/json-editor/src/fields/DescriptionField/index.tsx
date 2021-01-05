import React from 'react';
import type { SFC } from 'react';
import type { FieldProps } from '@rjsf/core';

const DescriptionField: SFC<FieldProps> = ({
  // autofocus,
  description,
  // disabled,
  // errorSchema,
  // formContext,
  // formData,
  id,
  // idSchema,
  // name,
  // onChange,
  // readonly,
  // registry,
  // required,
  // schema,
  // uiSchema,
}) => <span id={id}>{description}</span>;

export default DescriptionField;
