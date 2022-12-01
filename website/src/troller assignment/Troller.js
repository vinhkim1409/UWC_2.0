import classNames from 'classnames/bind';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars} from '@fortawesome/free-solid-svg-icons';
import styles from './Troller.module.scss'


const cx=classNames.bind(styles);

function Troller({troller=[]}){

    return(
        <>
        <div className={cx('header')}>header</div>
        <div className={cx('main')}>
            <h3>Phân công nhiệm vụ</h3>
            <h1>Xe đẩy</h1>
            <div className={cx('trollers')}>
                {troller.map((trl,index)=>(
                    <label key={index} className={cx('troller')}>
                        <input type='radio' name='troller' />
                        <h4>{trl.name}</h4>
                        <p>{trl.id}</p>
                        <FontAwesomeIcon icon={faBars} />
                    </label>
                ))}
            </div>
        </div>
        <div className={cx('footer')}>footer</div>
        </>
    )
}

export default Troller