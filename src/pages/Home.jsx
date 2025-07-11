import ContactForm from "../components/ContactForm";
import Nav from "../components/nav";

function Home() {
  return (
    <div>
      <Nav />
      <div className="m-4 d-flex justify-content-center flex-column align-items-center">
        <h1>Page Header</h1>
        <p>page content</p>
        <p>page content</p>
        <p>page content</p>
        <p>page content</p>
        <p>page content</p>
        <p>page content</p>
        <p>page content</p>
      </div>
      <ContactForm />
    </div>
  );
}

export default Home;
