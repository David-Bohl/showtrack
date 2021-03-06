import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import SearchBar from './SearchBar';
import ShowListing from './ShowListing';

class Search extends Component {
  
  componentDidMount(){
    var x = document.getElementById("search");
    x.className += " current-location";
  }
  componentWillUnmount(){
    var x = document.getElementById("search");
    x.className = x.className.replace(" current-location", "");
    //this.props.resetSearchResults();
  }

  render() {
    return (
      <div>
        <div className="snackbar" id="snackbarShowAdded">Show Added</div>
        <SearchBar />
        <ShowListing shows={this.props.searchResults} />

      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    searchResults: state.search.searchResults
  }
}

export default connect(mapStateToProps, actions)(Search);
