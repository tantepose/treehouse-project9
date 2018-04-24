import React, { Component } from 'react';

class SearchForm extends Component {

    // set initial state
    state = { 
        query: ''
    }

    // on form submit
    handleSubmit = e => {
        console.log('SEARCH CLICKED');
        e.preventDefault();
        this.props.onSearch(this.query.value);
        e.currentTarget.reset();
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
                        placeholder="Search..." />
                    <button 
                        type="submit" 
                        id="search-button" >
                        search
                    </button>
            </form>
        )    
    }
}

export default SearchForm;