import React, { Component } from 'react';

// component for the search form
class SearchForm extends Component {
    // on form submit; redirect to /search/query route
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