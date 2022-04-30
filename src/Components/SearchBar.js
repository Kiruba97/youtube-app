import React from "react";
import "./SearchBar.css"

class SearchBar extends React.Component{
    
    state = {term : ""}
    
    onInputChange = event => {
        this.setState({ term : event.target.value });
    }

    onFormSubmit = event => {
        event.preventDefault();

        this.props.onFormSubmit(this.state.term);
    }

    render() {
        return (
            <div className="rcorners1 search-box">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className=" field">
                        
                        <input style={{borderRadius:"25px", paddingTop:"10px"}} 
                            type="text"
                            placeholder="Type to search"
                            value={ this.state.term }
                            onChange={ this.onInputChange }
                        />

                    </div>

                </form>
            </div>
        )
    }
}

export default SearchBar;

