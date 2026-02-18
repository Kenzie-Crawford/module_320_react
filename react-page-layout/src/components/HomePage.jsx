import Header from "./Header";
import SearchBar from "./SearchBar";
import EmployeeList from "./EmployeeList";
import EmployeeCard from "./EmployeeCard";
import "./Homepage.css";

const employee = {

  firstName: "Julie",
  lastName: "Taylor",
  title: "VP of Marketing",
  phone: "781-000-0002",
  email: "jtaylor@fakeemail.com",
  picture: "https://randomuser.me/api/portraits/women/2.jpg",

};

function HomePage() {

  return (

    <div className="container">

      <div className="directory">

        <Header />

        <SearchBar />

        <EmployeeList />

      </div>

      <EmployeeCard employee={employee} />

    </div>

  );

}

export default HomePage;
