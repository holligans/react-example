// Dependecies
var React = require('react');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
// Components
var Header  = require('./Header');
var Weather  = require('./Weather');
var Button  = require('./Button');
var Details  = require('./Details');

// Home Component
class Home extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      city_name : ""
    };

    this.handleChange = this.handleChange.bind(this);
  };

  // handleChange
  handleChange(event){
    var text = event.target.value;
    this.setState(function(){
      return{city_name:text};
    });
  };

  // render Method
  render(){
    return(
      <div className="home-container">
        <div className="inputCity">
          <form>
            <div className="form-group">
              <label htmlFor="cityInput">Enter a City and State</label>
              <input 
                type="email" 
                className="form-control" 
                id="cityInput" 
                value={this.state.city_name}
                autoComplete="off" 
                placeholder="Plantation, Florida"
                onChange={this.handleChange}
              />
            </div>
            <Button city_name={this.state.city_name}/>
          </form>
        </div>
    </div>
    )
  }
};

// App Component
class App extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      city_name:"Holguin"
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  };

  // handling form submit
  handleSubmit(event){
    var city = event.target.value;
    this.setState(function(){
      return{city_name: city};
    });
  };
  
  // render Method
  render(){
    return(
      <Router>
        <div className="app-container">
          <Header submitCity={this.handleSubmit}/>
          <Route exact path="/" component={Home}/>
          <Route path="/forecast" component={Weather}/>
          <Route exact path={"/details/"+this.state.city_name} component={Details}/>
        </div>
      </Router> 
    )
  };
};

module.exports = App;
