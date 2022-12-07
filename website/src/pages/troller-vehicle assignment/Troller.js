import classNames from 'classnames/bind';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars} from '@fortawesome/free-solid-svg-icons';
import styles from './Troller.module.scss';
import {Button}  from 'react-bootstrap'
import { Link } from 'react-router-dom';

const cx=classNames.bind(styles);

function Troller({troller=[]}){

    return(
        <>
        <div className={cx('main')}>
            <h3>Phân công nhiệm vụ</h3>
            <h1>Xe đẩy</h1>
            <div className={cx('trollers')}>
                {troller.map((trl,index)=>(
                    <label key={index} className={cx('troller')}>
                        <input type='radio' name='troller' className={cx('radio-box')} />
                        <div className={cx('name-id')}>
                            <h4>{trl.name}</h4>
                            <p>Id: {trl.id}</p>
                        </div>
                        <FontAwesomeIcon icon={faBars} className={cx('faBars')} />
                    </label>
                ))}
            </div>
            <Button className={cx('submit')} >Xác nhận</Button>
        </div>
        </>
    )
}

export default Troller