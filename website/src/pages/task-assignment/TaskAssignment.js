import classNames from "classnames/bind";
import styles from "./TaskAssignment.module.scss";
import { Button } from "react-bootstrap";

const cx = classNames.bind(styles);

function TaskAssignment({ task, type }) {
  return (
    <>
      <div className={cx("header")}>header</div>
      <div className={cx("main")}>
        <h3>Phân công nhiệm vụ</h3>
        <table>
          <tr>
            <td>Tên nhiệm vụ:</td>
            <td>{task.name}</td>
          </tr>
          <tr>
            <td>ID:</td>
            <td>{task.id}</td>
          </tr>
          <tr>
            <td>Khu vực:</td>
            <td>{task.workingArea}</td>
          </tr>
          <tr>
            <td>Điểm bắt đầu:</td>
            <td>{task.startPlace}</td>
          </tr>
          <tr>
            <td>Kết thúc:</td>
            <td>{task.endPlace}</td>
          </tr>
          <tr>
            <td>Ngày:</td>
            <td>
              <Button className={cx("btn-select")}>Select</Button>
            </td>
          </tr>
          <tr>
            <td>{type}:</td>
            <td>
              <Button className={cx("btn-select")}>Select</Button>
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

export default TaskAssignment;
