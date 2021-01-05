import { utils, ThemeProps } from '@rjsf/core';
import * as Widgets from './widgets';
import * as Fields from './fields';
import { FieldTemplate, ArrayFieldTemplate, ObjectFieldTemplate } from './templates';

const { getDefaultRegistry } = utils;
const { widgets, fields } = getDefaultRegistry();

const theme: ThemeProps = {
  ArrayFieldTemplate,
  FieldTemplate,
  ObjectFieldTemplate,
  fields: { ...fields, ...Fields },
  widgets: { ...widgets, ...Widgets },
  // ErrorList,
};

export default theme;
