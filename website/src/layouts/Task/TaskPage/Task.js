import Vehicle from "../../../pages/troller-vehicle assignment/Vehicle";
import TaskItem from "../TaskItem";
const Task=[{
    TaskID:'01',
    Name:"Dọn rác khu vực KTX khu A",
    Area:'KTX khu A làng đại học',
    Start:'Tòa A1',
    End:'Khu tập kết rác sau tòa A14',
    Date:'14/11/2022',
    StaffName:'Kim Xuân Vĩnh',
    StaffID:'01',
    position:'Collector',
    vehicle:'56H37895',
},
{
    TaskID:'02',
    Name:"Dọn rác khu vực KTX khu A",
    Area:'KTX khu A làng đại học',
    Start:'Tòa A1',
    End:'Khu tập kết rác sau tòa A14',
    Date:'14/11/2022',
    StaffName:'Kim Xuân Vĩnh',
    StaffID:'02',
    position:'Janitor',
    vehicle:'56H37895',
},
{
    TaskID:'03',
    Name:"Dọn rác khu vực KTX khu A",
    Area:'KTX khu A làng đại học',
    Start:'Tòa A1',
    End:'Khu tập kết rác sau tòa A14',
    Date:'14/11/2022',
    StaffName:'Kim Xuân Vĩnh',
    StaffID:'03',
    position:'Collector',
    vehicle:'56H37895',
},
{
    TaskID:'03',
    Name:"Dọn rác khu vực KTX khu A",
    Area:'KTX khu A làng đại học',
    Start:'Tòa A1',
    End:'Khu tập kết rác sau tòa A14',
    Date:'14/11/2022',
    StaffName:'Kim Xuân Vĩnh',
    StaffID:'03',
    position:'Collector',
    vehicle:'56H37895',
},
{
    TaskID:'03',
    Name:"Dọn rác khu vực KTX khu A",
    Area:'KTX khu A làng đại học',
    Start:'Tòa A1',
    End:'Khu tập kết rác sau tòa A14',
    Date:'14/11/2022',
    StaffName:'Kim Xuân Vĩnh',
    StaffID:'03',
    position:'Collector',
    vehicle:'56H37895',
}
]
function TaskPage() {
    let body=(
        <div>
            {Task.map(task=>(
                <TaskItem Task={task}/>
            ))}
        </div>
    )
    return ( 
        <> 
           {body}
           
        </>
    )
}
export default TaskPage;