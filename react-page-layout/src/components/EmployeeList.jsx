import "./EmployeeList.css";

const employees = [

{
firstName: "James",
lastName: "King",
title: "President and CEO",

},

{
firstName: "Julie",
lastName: "Taylor",
title: "VP of Marketing",

},

{
firstName: "Eugene",
lastName: "Lee",
title: "CFO",

},

];

function EmployeeList() {
    const employeeList=["James King", "Julie Taylor", "Eugene Lee",
        "John Williams", "Ray Moore", "Paul Jones"
     ]


     return (
        <>
        <div>
        <h2>Employee List</h2>
        

        <ul>
            {employeeList.map((employee, index)=> <li key={index}>{employee}</li>)}
        </ul>
        </div>
        </>
        
    );
    }

export default EmployeeList;

