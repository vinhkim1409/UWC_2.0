import classNames from 'classnames/bind';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars} from '@fortawesome/free-solid-svg-icons';
import styles from './Troller.module.scss';
import {Button}  from 'react-bootstrap';
import { Link } from 'react-router-dom';


const cx=classNames.bind(styles);

function Vehicle({vehicle=[]}){

    return(
        <>
        <div className={cx('main')}>
            <h3>Phân công nhiệm vụ</h3>
            <h1>Phương tiện</h1>
            <div className={cx('trollers')}>
                {vehicle.map((vhc,index)=>(
                    <label key={index} className={cx('troller')}>
                        <input type='radio' name='troller' className={cx('radio-box')} />
                        <div className={cx('name-id')}>
                            <h4>{vhc.name}</h4>
                            <p>Id: {vhc.id}</p>
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

export default Vehicle