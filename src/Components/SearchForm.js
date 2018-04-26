import React, { Component } from 'react';

class SearchForm extends Component {

    // on form submit
    handleSubmit = e => {
        console.log('SEARCH CLICKED', this.query.value);
        console.log('props?', this.props)
        e.preventDefault();
        //this.props.history.push("path/to/push");

        // this.props.onSearch(this.query.value);
        // e.currentTarget.reset();
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