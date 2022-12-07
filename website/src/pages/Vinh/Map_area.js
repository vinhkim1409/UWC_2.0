import classNames from "classnames/bind";
import styles from "./Map_area.module.scss";
import { Button } from "react-bootstrap";

const cx = classNames.bind(styles);

function Map_area({ map_area, type }) {
  return (
    <>
      <div className={cx("header")}>header</div>
      <div className={cx("main")}>
        <h3>BẢN ĐỒ</h3>
        <table>
          <tr>
            <td>
            <div className={cx('areas')}>
            KHU VỰC A
            </div>
            </td>
            <td>
              <Button className={cx("btn-select")}>CHỌN</Button>
            </td>
          </tr>
          <tr>
          <td>
            <div className={cx('areas')}>
            KHU VỰC B
            </div>
            </td>
            <td>
              <Button className={cx("btn-select")}>CHỌN</Button>
            </td>
          </tr>
          
          
          
        </table>
        <div className={cx("btns")}>
          <Button className={cx("btn-return")}>Quay lại</Button>
          <Button className={cx("btn-submit")}>Xác nhận</Button>
        </div>
      </div>
      <div className={cx("footer")}>footer</div>
    </>
  );
}

export default Map_area;
