import React, { FC, useMemo } from 'react';
import { useParams } from 'react-router';
import { Link, LinkProps } from 'react-router-dom';
import { omit } from '@mxcins/utils';
import { useCoreRouter } from '../core-provider/context';

export interface ExLinkProps extends Omit<LinkProps, 'to'> {
  to?: LinkProps['to'];
  name?: string;
  path?: string;
  params?: Record<string, string | number>;
  query?: Record<string, string | number>;
  disabled?: boolean;
}

const MatchLink: FC<ExLinkProps> = props => {
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

  return <Link {...rest} to={to} />;
};

const ExLink: FC<ExLinkProps> = props => {
  const { to } = props;

  return to ? (
    <Link {...omit(props, ['name', 'path', 'params', 'query'])} to={to} />
  ) : (
    <MatchLink {...props} />
  );
};

export default ExLink;
