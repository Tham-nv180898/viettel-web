import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './OutlinedButton.module.scss';

const cx = classNames.bind(styles);

function OutlinedButton({
  to,
  href,
  disabled = false,
  className,
  children,
  onClick,
  leftIcon,
  rightIcon,
  ...passProps
}) {
  let Component = 'button';
  const props = {
    onClick,
    ...passProps,
  };
  if (disabled) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith('on') && props[key] === 'function') {
        delete props[key];
      }
    });
  }
  if (to) {
    props.to = to;
    Component = Link;
  } else if (href) {
    props.href = href;
    Component = 'a';
  }

  const classes = cx('wrapper', {
    [className]: className,
    disabled,
  });

  return (
    <Component className={classes} {...props}>
      {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
      <span className={cx('title')}>{children}</span>
      {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
    </Component>
  );
}

export default OutlinedButton;
