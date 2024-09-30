import { Link } from 'react-router-dom';
import ElevatedButton from '~/components/buttons/ElevatedButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import config from '~/config';
import styles from './Header.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <Link to={config.routes.home} className={cx('logo-link')}>
          <img src={images.logo} alt="3G 4G VIETTEL" className={cx('logo-image')} />
        </Link>
        <div className={cx('actions')}>
          <ElevatedButton className={cx('action-button')}>ĐĂNG KÍ 4G</ElevatedButton>
          <ElevatedButton className={cx('action-button')}>ĐĂNG KÍ 3G</ElevatedButton>
          <ElevatedButton className={cx('action-button')}>TIN TỨC</ElevatedButton>
          <ElevatedButton className={cx('action-button')}>KHUYẾN MẠI</ElevatedButton>
          <ElevatedButton className={cx('action-button')}>GIỚI THIỆU</ElevatedButton>
          <ElevatedButton className={cx('action-button')}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </ElevatedButton>
        </div>
      </div>
    </header>
  );
}

export default Header;
