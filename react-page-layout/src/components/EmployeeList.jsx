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

return (

<div>

{employees.map((emp, index) => (

<div className="list-item" key={index}>

<img src={emp.picture} />

<div>

<div className="name">
{emp.firstName} {emp.lastName}
</div>

<div className="title">
{emp.title}
</div>

</div>

</div>

))}

</div>

);

}

export default EmployeeList;

