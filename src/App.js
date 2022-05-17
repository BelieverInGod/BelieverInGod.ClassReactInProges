import './App.css';
import  { Component }  from 'react';

class WhoAmI extends Component {
  constructor(props){
    super(props);
    this.state = {
      years: 20,
      position: '',
    };
  }

  nextYear = () => {
    this.setState(state => ({
      years: state.years + 1
    }))
  };

  backYear = () => {
    this.setState(state => ({
      years: state.years - 1
    }))
  };

  commitInputChanges = (e, color) => {
    console.log(color)
    this.setState({
      position: e.target.value
    })
  }

  render() {
    const {name, surname, link} = this.props
    const {years, position} = this.state
    return(
        <div className='d-flex'> 
          <button onClick={this.backYear} >MINUS YEAR</button>
          <button onClick={this.nextYear} >PLUS YEAR</button>
          <h1 className="colortxt2">
              My name is<p className="colortxt">{name}</p>,
              Surname - <p className="colortxt"> {surname}</p>,
              age - <p className="colortxt"> {years}</p> , 
              position - <p className="colortxt"> {position}</p> 
          </h1>
          <a href={link}>My account</a>
          <form>
            <span className="colortxt2">Впишіть посаду: </span>
            <input type="text" onChange={(e) => this.commitInputChanges(e, "some color")} />
          </form>
        </div>
    )
  }  
} 

function App() {
  return (
    <div className="App">
      <WhoAmI name='Alexey' surname='Stepanyuk' link='instagram.com'/>
      <WhoAmI name='Tania' surname='Baranova' link='instagram.com'  />
    </div>
  );
}

export default App;
