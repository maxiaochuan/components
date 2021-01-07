/* eslint-disable @typescript-eslint/no-explicit-any */
import { compile } from 'path-to-regexp';
import { stringify } from 'query-string';
import type { RouteType } from './interface';

interface MatchOpts {
  params: Record<string, any>;
  query?: Record<string, any>;
}

export class RouterHelper {
  public routes: RouteType[];

  private hash: Map<string, RouteType>;

  constructor(route?: RouteType) {
    this.routes = [];
    this.hash = new Map();
    if (route) {
      this.prepare(route);
    }
  }

  // eslint-disable-next-line class-methods-use-this
  public path2uri(path: string, opts: MatchOpts): string | { pathname: string; search: string } {
    const { query, params } = opts;
    try {
      const pathname = compile(path)(params);
      if (query) {
        return { pathname, search: stringify(query) };
      }
      return pathname;
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
      return '#';
    }
  }

  public name2uri(name: string, opts: MatchOpts): string | { pathname: string; search: string } {
    const { params, query } = opts;
    const route = this.hash.get(name);

    if (!route) {
      // eslint-disable-next-line no-console
      console.error(`route or to must be have one. name: ${name}`);
      return '#';
    }
    const { path } = route;
    if (!path) {
      // eslint-disable-next-line no-console
      console.error(`can not find route path by name: ${name}.`);
      return '#';
    }
    try {
      const pathname = compile(path)(params);
      if (query) {
        return { pathname, search: stringify(query) };
      }
      return pathname;
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
      return '#';
    }
  }

  public findByName(name: string): RouteType | undefined {
    return this.hash.get(name);
  }

  private prepare(route: RouteType) {
    const stack: RouteType[] = [route];
    let current: RouteType;
    while (stack.length) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      current = stack.shift()!;

      if (current.routes) {
        stack.push(...current.routes);
      }

      this.routes.push(current);
      if (current.name) {
        this.hash.set(current.name, current);
      }
    }

    return this;
  }
}

export default {};
