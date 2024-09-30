import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import OutlinedButton from '~/components/buttons/OutlinedButton';
import { Link } from 'react-router-dom';
import images from '~/assets/images';
const cx = classNames.bind(styles);

function Footer() {
  return (
    <footer className={cx('wrapper')}>
      <section className={cx('info-section')}>
        <div className={cx('info-section-inner')}>
          <div className={cx('contact-info-wrapper')}>
            <h3>THÔNG TIN LIÊN HỆ</h3>
            <img src={images.secondLogo} alt="VIETTEL LOGO"></img>
            <p>
              Đơn vị cung cấp: <strong>Viettel</strong>
            </p>
          </div>
          <div className={cx('wrapper-4g')}>
            <h3>4G VIETTEL</h3>
            <OutlinedButton className={cx('action-4g')}>CÁC GÓI CƯỚC 4G VIETTEL</OutlinedButton>
            <OutlinedButton className={cx('action-4g')}>GÓI CƯỚC COMBO NGHE GỌI VIETTEL</OutlinedButton>
            <OutlinedButton className={cx('action-4g')}>ĐĂNG KÍ 4G VIETTEL NGẮN NGÀY</OutlinedButton>
          </div>
          <div className={cx('wrapper-3g')}>
            <h3>3G VIETTEL</h3>
            <OutlinedButton className={cx('action-3g')}>CÁC GÓI CƯỚC 3G MIMAX VIETTEL</OutlinedButton>
            <OutlinedButton className={cx('action-3g')}>KIỂM TRA DUNG LƯỢNG VIETTEL</OutlinedButton>
            <OutlinedButton className={cx('action-3g')}>MUA THÊM DATA VIETTEL</OutlinedButton>
          </div>
          <div className={cx('support-wrapper')}>
            <h3>TỔNG ĐÀI HỖ TRỢ</h3>
            <p>
              Tổng đài Viettel: <strong>18008098</strong> hoặc <strong>198</strong> (miễn phí)
            </p>
            <Link>
              <p>Điều khoản chung</p>
            </Link>
          </div>
        </div>
      </section>
      <section className={cx('mader-section')}>
        <p>
          © 2024 by <b>3G4GViettel.vn</b>
        </p>
      </section>
    </footer>
  );
}
export default Footer;
