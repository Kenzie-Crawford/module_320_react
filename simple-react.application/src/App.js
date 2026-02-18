function Header() {
  return (<h1>Simple React Application</h1>)
}

function Content(props) {
  return (<p style={{color:props.color}}>{props.text}</p>)
}

function Footer() {
  return (<h1>Created by me</h1>)
}

function App() {
  return (
    <>
    <Header/>
    <Content color="blue" text="Have you heard of our Lord and Savior Gideon Nav?"/>
    <Content color="gold" text="Eat your heart out, Jesus."/>
    <Content color="red" text="Also God can go choke."/>
    <Footer/>
    </>
  );
}

export default App;
