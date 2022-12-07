import classNames from "classnames/bind";
import styles from "./Assign.module.scss";
import { Button } from "react-bootstrap";

const cx = classNames.bind(styles);

function Ass_collector({ ass_collector, type }) {
  return (
    <>
      <div className={cx("header")}>header</div>
      <div className={cx("main")}>
        <h3>DANH SÁCH NHÂN VIÊN THU GOM</h3>
        <table>
        <div className={styles.cell}>
        <tr>
            
            <td>Nguyễn Văn A</td>{"\n"}
            <td>ID: 1</td>
            
            <td>Collector</td>
            <td>ID xe: 1</td>
            <td>
              <Button className={cx("btn-select")}>CHỌN</Button>
            </td>
          </tr>
        </div>

        <div className={styles.cell}>
        <tr>
            
            <td>Nguyễn Văn B</td>{"\n"}
            <td>ID: 2</td>
            
            <td>Collector</td>
            <td>ID xe: 211</td>
            <td>
              <Button className={cx("btn-select")}>CHỌN</Button>
            </td>
          </tr>
        </div>
        <div className={styles.cell}>
        <tr>
            
            <td>Nguyễn Văn H</td>{"\n"}
            <td>ID: 2</td>
            
            <td>Collector</td>
            <td>ID xe: 878</td>
            <td>
              <Button className={cx("btn-select")}>CHỌN</Button>
            </td>
          </tr>
        </div>
          
        <div className={styles.cell}>
        <tr>
            
            <td>Trần Thị D</td>{"\n"}
            <td>ID: 8</td>
            
            <td>Collector</td>
            <td>ID xe: 156</td>
            <td>
              <Button className={cx("btn-select")}>CHỌN</Button>
            </td>
          </tr>
        </div>

        <div className={styles.cell}>
        <tr>
            
            <td>Nguyễn Thị G</td>{"\n"}
            <td>ID: 10</td>
            
            <td>Collector</td>
            <td>ID xe: 639</td>
            <td>
              <Button className={cx("btn-select")}>CHỌN</Button>
            </td>
          </tr>
        </div>
          
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

export default Ass_collector;
