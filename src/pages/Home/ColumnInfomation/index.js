import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGift, faHandPointRight } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './ColumnInfomation.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function ColumnInfomation() {
  return (
    <div className={cx('wrapper')}>
      <Link to={''} className={cx('title')}>
        <FontAwesomeIcon icon={faGift} className={cx('title-icon')}></FontAwesomeIcon>
        <h3>Khuyến mãi</h3>
      </Link>
      <p className={cx('sub-title')}>Các khuyến mãi mới nhất của Viettel</p>
      <Link to="" className={cx('image-link')}>
        <img src={require('~/assets/images/Khuyen-mai-1.png')} alt="khuyến mãi VIETTEL" />
      </Link>
      <div className={cx('post-items')}>
        <h5 className={cx('post-item')}>
          <FontAwesomeIcon icon={faHandPointRight} className={cx('post-icon')} />
          <Link>Tưng bừng khuyến mãi 20% - 50% thẻ nạp Viettel tháng 9/2024.</Link>
        </h5>
        <h5 className={cx('post-item')}>
          <FontAwesomeIcon icon={faHandPointRight} className={cx('post-icon')} />
          <Link>Viettle khuyến mãi nạp thẻ tháng 5/2024 vào ngày nào?</Link>
        </h5>
        <h5 className={cx('post-item')}>
          <FontAwesomeIcon icon={faHandPointRight} className={cx('post-icon')} />
          <Link>Lịch khuyến mãi Viettel tháng 9/2024 ưu đãi cực sốc.</Link>
        </h5>
      </div>
    </div>
  );
}

export default ColumnInfomation;
