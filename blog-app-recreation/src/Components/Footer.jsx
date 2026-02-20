import Nav from "./Nav";

function Footer() {

  const footerLinks = [
    "Women's",
    "Men's",
    "On the Street",
    "The Catwalk",
    "Ad Watch",
    "About",
    "Tips"
  ];

  return (

    <footer>

      <Nav
        links={footerLinks}
        className="footer-nav"
      />
      <p className="footer-copyright">Copyright Sartre's List 2013</p>

    </footer>

  );

}

export default Footer;