import React from 'react';
import type { SFC } from 'react';
import type { FieldProps } from '@rjsf/core';
import { classnames } from '@mxcins/utils';

import { withConfigConsumer } from 'antd/lib/config-provider/context';

const TitleField: SFC<FieldProps> = props => {
  const {
    // autofocus,
    // disabled,
    // errorSchema,
    formContext,
    // formData,
    id,
    // idSchema,
    // name,
    // onChange,
    prefixCls,
    // readonly,
    // registry,
    required,
    // schema,
    title,
    // uiSchema,
  } = props;
  const { colon = true } = formContext;

  let labelChildren = title;
  if (colon && typeof title === 'string' && title.trim() !== '') {
    labelChildren = title.replace(/[:：]\s*$/, '');
  }

  const labelClassName = classnames({
    [`${prefixCls}-item-required`]: required,
    [`${prefixCls}-item-no-colon`]: !colon,
  });

  const handleLabelClick = () => {
    if (!id) {
      return;
    }

    const control = document.querySelector(`[id="${id}"]`);
    if (control && control.focus) {
      control.focus();
    }
  };

  return title ? (
    <label
      className={labelClassName}
      htmlFor={id}
      onClick={handleLabelClick}
      title={typeof title === 'string' ? title : ''}
    >
      {labelChildren}
    </label>
  ) : null;
};

TitleField.defaultProps = {
  formContext: {},
};

export default withConfigConsumer({ prefixCls: 'form' })(TitleField);
