var React  = require('react');
var Button  = require('./Button');

class Header extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            city_name:""
        }

        this.handleChange = this.handleChange.bind(this);
    };

    // handling input changes
    handleChange(event){
        var text = event.target.value;
        this.setState(function(){
            return{city_name:text};
        });
    };

    // render Method
    render(){
        return(
            <div className="header-container">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" rel="noopener noreferrer" target="_blank" href="https://google.com">Weather App</a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <form className="form-inline my-2 my-lg-0">
                            <input 
                                className="form-control mr-sm-2" 
                                type="text" 
                                value={this.state.city_name}
                                placeholder="Plantation, Florida" 
                                aria-label="CityInput"
                                autoComplete="off"
                                onChange={this.handleChange}
                            />
                            <Button city_name={this.state.city_name}/>
                        </form>
                    </div>
                </nav>
            </div>
        )
    }
}

module.exports = Header;