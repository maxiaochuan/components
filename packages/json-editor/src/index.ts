import { withTheme } from '@rjsf/core';
import Theme from './theme';

export type { FormProps as JsonEditorProps } from '@rjsf/core';

export { default as Theme } from './theme';

export default withTheme(Theme);
