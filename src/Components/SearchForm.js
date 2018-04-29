import React, { Component } from 'react';

class SearchForm extends Component {

    // on form submit; redirect to search route with query
    handleSubmit = e => {
        e.preventDefault();
        const newRoute = '/search/' + this.query.value;
        window.open(newRoute, '_self');
    }

    // rendering component
    render() {
        return(
            <form 
                className="search-form" 
                onSubmit={this.handleSubmit} >
                    <input 
                        type="search" 
                        id="search-input"
                        ref={ (input) => this.query = input }
                        placeholder="Search..."
                        required />
                    <button 
                        type="submit" 
                        id="search-button" >
                        <span role="img" aria-label="search">🔎</span>
                    </button>
            </form>
        )    
    }
}

export default SearchForm;