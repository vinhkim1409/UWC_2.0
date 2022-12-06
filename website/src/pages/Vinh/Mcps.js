import classNames from "classnames/bind";
import styles from "./Map_area.module.scss";
import { Button } from "react-bootstrap";

const cx = classNames.bind(styles);

function Map_area({ mcps, type }) {
  return (
    <>
      <div className={cx("header")}>header</div>
      <div className={cx("main")}>
        <h3>BẢN ĐỒ MCPS</h3>
        <table>
          <tr>
            <td>KHU VỰC A</td>
            <td>
              <Button className={cx("btn-select")}>CHỌN</Button>
            </td>
          </tr>
          <tr>
            <td>KHU VỰC B</td>
            <td>
              <Button className={cx("btn-select")}>CHỌN</Button>
            </td>
          </tr>
          <tr>
            <td>KhU VỰC C </td>
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
