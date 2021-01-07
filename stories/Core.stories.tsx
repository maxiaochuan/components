import React, { FC } from 'react';
import { BrowserRouter as Router, Switch, Route, useParams } from 'react-router-dom';
import type { Story, Meta } from '@storybook/react/types-6-0';
import { CoreProvider, CoreProviderProps, ExLink, ExRedirect } from '../packages/components/src';

const META: Meta = {
  title: 'Example/CoreProvider',
  component: CoreProvider,
};

export default META;

const ROUTES = [
  { path: '/', name: 'HOME' },
  { path: '/about', name: 'ABOUT' },
  { path: '/users', name: 'USERS' },
  { path: '/users/:id', name: 'USER' },
  { path: '/redirect', name: 'REDIRECT' },
];

const R: FC = () => {
  return <ExRedirect name="USERS" />;
};

const User: FC = () => {
  const matchParams = useParams<{ id: string }>();
  return <>User: ${matchParams.id}</>;
};

const T: Story<CoreProviderProps> = (props: CoreProviderProps) => {
  return (
    <CoreProvider {...props}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <ExLink to="/">To Home By Link</ExLink>
              </li>
              <li>
                <ExLink name="ABOUT">To About By ExLink</ExLink>
              </li>
              <li>
                <ExLink name="USERS">To Users By ExLink</ExLink>
              </li>
              <li>
                <ExLink name="USER" params={{ id: '123' }}>
                  To User: 123 By ExLink
                </ExLink>
              </li>
              <li>
                <ExLink name="REDIRECT" params={{ id: '123' }}>
                  To Redirect, redirect to users
                </ExLink>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/redirect">
              <R />
            </Route>
            <Route path="/about">
              <>About</>
            </Route>
            <Route path="/users/:id">
              <User />
            </Route>
            <Route path="/users">
              <>Users</>
            </Route>
            <Route path="/">
              <>HOME</>
            </Route>
          </Switch>
        </div>
      </Router>
    </CoreProvider>
  );
};

export const Core = T.bind({});

Core.args = {
  route: { routes: ROUTES },
};
