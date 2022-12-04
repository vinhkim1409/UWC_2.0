import styles from './styles.module.css'
function TaskItem({Task:{ 
TaskID,
Name,
Area,
Start,
End,
Date,
StaffName,
StaffID,
position,
vehicle}}) {
    return ( 
        <> 
            <div className={styles.khung}>
            <div className={styles.task}>
            <div className={styles.datetask}>Ngày: {Date}</div>
                <did className={styles.tasktext}>
                
                <div >Mã : {TaskID}</div>
                <div>Tên nhiệm vụ: {Name} </div>
                <div>Khu vực: {Area}</div>
                <div>Điểm bắt đầu: {Start}</div>
                <div>Điểm kết thúc: {End}</div>
                </did>
                <div className={styles.icontask}></div>
            </div>

            <div className={styles.staff}>
                <div className={styles.avatar}></div>
                <div
                style={{ 
                    position: 'absolute',
                    left:340
                }}
                >Mã:{StaffID}</div>
            <did className={styles.stafftext}>
                <div>{StaffName}</div>
                <div>{position}</div>
                <div>Mã phương tiện: {vehicle}</div>
            
            </did>
            </div>
                    

            </div>
        </>
    )
}
export default TaskItem;