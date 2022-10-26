
import Form from "./form";
import Form2 from "./maxmin";
import Card from './card'
import Footer from './footer';


function App() {
  return (
    <div>  
    <div className='centre top'>
    <img className="inline " src="./logo.png" alt="logo"/>
    <h1 className='inline title'>Number Facts</h1>
    <p className='quote'>number rules the universe ~ pythagoras</p>  
    </div>

      <div className="top1">
      <Form />

      </div>
      <div className="top2">
      <Form2 />

      </div>
      
      <div className='allcards row top3'>
      <h2 className="centre">Random fact searcher</h2>
      <Card fact="math"/>
      <Card fact="trivia"/>
      <Card fact="year"/>
      <Card fact="date"/>
      </div>

      
      <div className='top4'>
      <Footer />

      </div>
      
      

    </div>
  );
}
  
export default App;