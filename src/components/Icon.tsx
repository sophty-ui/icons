import clsx from 'clsx';
import { DetailedHTMLProps, ForwardedRef, forwardRef, HTMLAttributes, ReactElement } from 'react';

export interface IIconProps extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
  box?: string;
  rotate?: number;
  spin?: boolean;
}

const DEFAULT_TAB_INDEX = -1;
const BASE_PROPS = {
  'aria-hidden': true,
  fill: 'currentColor',
  focusable: false,
  height: '1em',
  width: '1em',
};

const Icon = (
  { box, tabIndex, rotate, spin, className, children, ...props }: IIconProps,
  ref: ForwardedRef<HTMLSpanElement>
): ReactElement => (
  <span
    {...props}
    className={clsx(className, 'icon', !!spin && 'icon-spin')}
    ref={ref}
    role="img"
    tabIndex={typeof tabIndex === 'undefined' || props.onClick ? DEFAULT_TAB_INDEX : tabIndex}
  >
    <svg viewBox={box} {...BASE_PROPS} style={{ transform: rotate ? `rotate(${rotate}deg)` : undefined }}>
      {children}
    </svg>
  </span>
);

export default forwardRef<HTMLSpanElement, IIconProps>(Icon);
