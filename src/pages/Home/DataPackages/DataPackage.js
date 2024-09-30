import classNames from 'classnames/bind';
import styles from './DataPackages.module.scss';
import { Link } from 'react-router-dom';
import ElevatedButton from '~/components/buttons/ElevatedButton';
import OutlinedButton from '~/components/buttons/OutlinedButton';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function DataPackage({ hotSale = false }) {
  return (
    <div className={cx('data-package')}>
      {hotSale && <img src={images.hotSale} alt="HOT SALE" className={cx('hot-sale-icon')}></img>}
      <Link className={cx('package-name')}>
        <h2>ST70K</h2>
      </Link>
      <div className={cx('package-info')}>
        <p className={cx('package-price')}>70.000đ / 30 ngày</p>
        <p className={cx('package-capacity')}>
          Data: <strong className={cx('capacity-value')}>15GB</strong>
        </p>
        <p className={cx('registration-syntax')}>
          <strong className={cx('syntax-content')}>V90B KT</strong> gửi{' '}
          <strong className={cx('syntax-content')}>290</strong>
        </p>
      </div>

      <ElevatedButton className={cx('registration-action')}>SOẠN TIN</ElevatedButton>
      <OutlinedButton className={cx('detail-info')}>Chi tiết</OutlinedButton>

      <div></div>
    </div>
  );
}

export default DataPackage;
