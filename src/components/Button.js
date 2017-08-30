var React = require('react');
var ReactRouter = require('react-router-dom');
var Route = ReactRouter.Route;

function Button(props){
    return(
        <Route render={({ history}) => (
            <button
              type='button'
              className="btn btn-primary"
              onClick={() => { history.push({pathname:'/forecast', search:'?city_name='+props.city_name}) }}
            >
              Get Weather
            </button>
        )} />
    );
};

module.exports = Button;