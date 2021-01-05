import React from 'react';
import type { Story, Meta } from '@storybook/react/types-6-0';
import JsonEditor, { JsonEditorProps as JEPS } from '../packages/json-editor/src';

const META: Meta = {
  title: 'Example/JsonEditor',
  component: JsonEditor,
};

export default META;

const SCHEMA: JEPS<unknown>['schema'] = {
  title: '测试',
  type: 'object',
  properties: {
    string: { type: 'string' },
    password: { type: 'string' },
    number: { type: 'number', minimum: 10, maximum: 20 },
    color: { type: 'string' },
    email: { type: 'string', format: 'email' },
    url: { type: 'string', format: 'url' },
    date: { type: 'string', format: 'date' },
    datetime: { type: 'string', format: 'date-time' },
    textarea: { type: 'string' },
    boolean: { type: 'boolean' },
  },
};

const UI_SCHEMA: JEPS<unknown>['uiSchema'] = {
  password: {
    'ui:widget': 'password',
  },
  textarea: {
    'ui:widget': 'textarea',
  },
  color: {
    'ui:widget': 'color',
  },
};

const H: Story<JEPS<unknown>> = (props: JEPS<unknown>) => <JsonEditor {...props} />;

export const StringRequired = H.bind({});

StringRequired.args = {
  schema: { type: 'object', required: ['string'], properties: { string: { type: 'string' } } },
  onChange: (e, es) => {
    console.log('asdf', e, es);
  },
};

export const Simple = H.bind({});

Simple.args = {
  schema: SCHEMA,
  uiSchema: UI_SCHEMA,
};
