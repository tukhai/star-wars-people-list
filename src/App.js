import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import PeopleList from './components/PeopleList.js';
import Pagination from './components/Pagination.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peopleListData: [],
      listCount: 0,
      isShowLoadingText: true
    }
    this.handleChangePage = this.handleChangePage.bind(this);
  }

  handleChangePage(page) {
    // let params = new URLSearchParams(window.location.search);
    // let currentSearchQuery = params.get('search') ? params.get('search') : "";

    this.setState({
      currentPage: page,
      isShowLoadingText: true
    });

    this.callApi(page);
  }

  callApi(page) {
    var fetchUrl = `https://swapi.co/api/people/?page=${page}`;

    fetch(fetchUrl,
    {
      method: 'GET'
    })
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
      var dataList = [];
      var dataCount = 0;
      if (responseJson && responseJson.results && responseJson.count > 0) {
        dataList = responseJson.results;
        dataCount = responseJson.count;
      }

      this.setState({
        peopleListData: dataList,
        listCount: dataCount,
        isShowLoadingText: false
      });
    })
    .catch((error) => {
      console.error(error);
    });
  }

  componentDidMount() {
    this.callApi(1);
  }

  render() {
    return (
      <div className="App">
        <div className="main-container">
          <h2>Star Wars People List</h2>
          <div className="app-intro-section">
            A single page application where users can view the details 
            about all the people in the Star Wars Universe.
          </div>

          {this.state.isShowLoadingText ?
            <div className="loading-text-container">
              <i className="fa fa-spinner fa-spin"></i> Fetching List...
            </div>
            :
            <PeopleList 
              peopleListData = {this.state.peopleListData}
            />
          }

          <Pagination 
            totalItems = {this.state.listCount}
            pageSize = {10}
            currentPage = {this.state.currentPage}
            // maxPages = {10}
            onChangePage = {this.handleChangePage}
          />
        </div>
      </div>
    );
  }
}

export default App;
