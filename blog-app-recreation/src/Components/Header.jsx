import Nav from "./Nav";

function Header() {

  const headerLinks = [
    "Women's",
    "Men's",
    "On the Street",
    "The Catwalk",
    "Ad Watch",
    "About"
  ];

  return (

    <header>

      <h1>Sartre's List</h1>

      <Nav
        links={headerLinks}
        className="header-nav"
      />

    </header>

  );

}

export default Header;