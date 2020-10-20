import React from 'react';
import type { Story, Meta } from '@storybook/react/types-6-0';
import { Scrollbars, ScrollbarsProps } from '../packages/components/src';

const META: Meta = {
  title: 'Example/Scrollbars',
  component: Scrollbars,
};

export default META;

const T: Story<ScrollbarsProps> = (props: ScrollbarsProps) => <Scrollbars {...props} />;

export const Base = T.bind({});

Base.args = {
  style: { height: 300, background: 'red' },
  children: <div style={{ height: 400 }} />,
};
