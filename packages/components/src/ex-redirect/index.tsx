import React, { FC, useMemo } from 'react';
import { useParams } from 'react-router';
import { Redirect, RedirectProps } from 'react-router-dom';
import { omit } from '@mxcins/utils';
import { useCoreRouter } from '../core-provider/context';

export interface ExRedirectProps extends Omit<RedirectProps, 'to'> {
  to?: RedirectProps['to'];
  name?: string;
  path?: string;
  params?: Record<string, string | number>;
  query?: Record<string, string | number>;
  disabled?: boolean;
}

const MatchRedirect: FC<ExRedirectProps> = props => {
  const { name, path, params, query, ...rest } = props;
  const router = useCoreRouter();
  const matchParams = useParams();
  const to = useMemo(() => {
    const opts = { params: { ...matchParams, ...params }, query };
    if (name) {
      return router.name2uri(name, opts);
    }
    if (path) {
      return router.path2uri(path, opts);
    }

    return '';
  }, [name, path, params, matchParams]);

  if (!to) {
    return <div>link error</div>;
  }

  return <Redirect {...rest} to={to} />;
};

const ExRedirect: FC<ExRedirectProps> = props => {
  const { to } = props;

  return to ? (
    <Redirect {...omit(props, ['name', 'path', 'params', 'query'])} to={to} />
  ) : (
    <MatchRedirect {...props} />
  );
};

export default ExRedirect;
