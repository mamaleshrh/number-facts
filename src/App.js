
import Form from "./form";
import Card from './card'
import Footer from './footer';


function App() {
  return (
    <div>  
    <div className='centre'>
    <img className="inline " src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/facebook/65/pager_1f4df.png" alt="logo"/>
    <h1 className='inline title'>Number Facts</h1>
    <p className='quote'>number rules the universe ~ pythagoras</p>  
      </div>

      
      <Form />
      
      <div className='allcards row'>
      <Card fact="math"/>
      <Card fact="trivia"/>
      <Card fact="year"/>
      <Card fact="date"/>
      </div>
      
      <Footer/>

    </div>
  );
}
  
export default App;