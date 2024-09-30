import { Link } from 'react-router-dom';
import Header from '../components/Header';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import DataPackages from './DataPackages';
import ColumnInfomation from './ColumnInfomation';
import Footer from '../components/Footer';

const cx = classNames.bind(styles);

function Home() {
  return (
    <div>
      {/* Header page */}
      <Header />
      {/* Banner page */}
      <Link className={cx('banner')}></Link>
      {/* Content page */}
      <div className={cx('content-wrapper')}>
        <div className={cx('note')}>
          Gói cước cũ của bạn sẽ tự động gia hạn nếu còn đủ tiền trong tài khoản chính. Để kiểm tra gói cước cũ, soạn
          tin <strong>KTTK</strong> gửi <strong>191</strong>
        </div>
        <div className={cx('packages-list')}>
          <DataPackages />
          <DataPackages redTheme />
          <DataPackages />
          <DataPackages redTheme />
        </div>
        <div className={cx('informations-wrapper')}>
          <ColumnInfomation />
          <ColumnInfomation />
        </div>
      </div>
      {/* Footer page*/}
      <Footer />
    </div>
  );
}

export default Home;
