import classNames from 'classnames/bind';
import styles from './DataPackages.module.scss';
import DataPackage from './DataPackage';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function DataPackages({ redTheme = false }) {
  const wrapperClass = redTheme ? cx('packages-wrapper-red-theme') : cx('packages-wrapper');
  const linkClass = redTheme ? cx('packages-title-link-red-theme') : cx('packages-title-link');
  return (
    <section className={wrapperClass}>
      <div className={cx('packages-wrapper-inner')}>
        <h2 className={cx('packages-title')}>
          <Link className={linkClass} to="">
            Gói siêu tốc Viettel
          </Link>
        </h2>
        <div className={cx('packages-content')}>
          <DataPackage hotSale={true} />
          <DataPackage />
          <DataPackage hotSale={true} />
          <DataPackage />
        </div>
      </div>
    </section>
  );
}

export default DataPackages;
