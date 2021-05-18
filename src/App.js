import React from 'react';
import Api from './Api';
import  ListConversionRates from './components/ListConversionRates';
class App extends React.Component {
  state = { rates: [], today:null };

  async componentDidMount()
  {
    const response = await Api.get('/convert', {
      /*params: { 
        q:'USD_inr',
        compact:'ultra',
        apiKey:'91efe9f694002f42862a'
        //query: "q=USD_INR&compact=ultra&date=2021-05-01&endDate=2021-05-07&apiKey=91efe9f694002f42862a"
       }*/
       params: { 
        q:'USD_inr',
        compact:'ultra',
        apiKey:'91efe9f694002f42862a',
        date:'2021-05-12',
        endDate:'2021-05-18'
       }

    });
    
    //q=USD_INR&compact=ultra&date=2021-05-01&endDate=2021-05-07&apiKey=91efe9f694002f42862a
    console.log("list Dtata",response.data.USD_INR)
    this.setState({ rates: response.data.USD_INR});
    
  }

 
  getRate=async ()=>{
   
    const response = await Api.get('/convert', {
      params: { 
        q:'USD_inr',
        compact:'ultra',
        apiKey:'91efe9f694002f42862a'
        
       }
       

    });
    console.log("GEt Data",response.data.USD_INR)
    //return response.data.USD_INR;
    this.setState({ today: response.data.USD_INR});
  }

  printrates=()=>{
    let rates = this.state.rates;
    
    if( rates !== null)
    {
      console.log("loop",rates)
      return(
        <div>
          <p>2021-05-12:{rates["2021-05-12"]}</p>
          <p>2021-05-13:{rates["2021-05-13"]}</p>
          <p>2021-05-14:{rates["2021-05-14"]}</p>
          <p>2021-05-15:{rates["2021-05-15"]}</p>
          <p>2021-05-16:{rates["2021-05-16"]}</p>
          <p>2021-05-17:{rates["2021-05-17"]}</p>
          <p>2021-05-18:{rates["2021-05-18"]}</p>
        </div>
        
      )
     
      
      /*2021-05-12: 73.68185
      2021-05-13: 73.44515
      2021-05-14: 73.279104
      2021-05-15: 73.279104
      2021-05-16: 73.279151
      2021-05-17: 73.26995
      2021-05-18: 73.0372*/
     
     
    }else{
      console.log("not",rates)
      return null;
    }
  }

  render() {
    
    return (
      <div >
        <h5>USD to INR</h5>
        <button onClick={this.getRate}>GET Rate</button>
        {this.state.today}
        <h5>Rate History</h5>
        {this.printrates()}
      </div>
    );
  }
}


export default App;