import React from 'react';
import { Link } from 'react-router-dom';

class PackageOverview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      personData: {},
      isShowLoadingText: true
    }
  }

  componentDidMount() {
    var personIdFromUrl = 1;
    if (this.props.location && this.props.location.pathname) {
      var strIdFromUrl = this.props.location.pathname.replace("/people-details/", "");
      if (parseInt(strIdFromUrl) && Number.isInteger(parseInt(strIdFromUrl))) {
        personIdFromUrl = parseInt(strIdFromUrl);
      }
    }

    var fetchUrl = `https://swapi.co/api/people/${personIdFromUrl}/`;

    fetch(fetchUrl,
    {
      method: 'GET'
    })
    .then((response) => response.json())
    .then((responseJson) => {
      console.log("--responseJson--", responseJson);
      if (responseJson) {
        this.setState({
          personData: responseJson,
          isShowLoadingText: false
        });
      }
    })
    .catch((error) => {
      console.error(error);
    });
  }

  render() {
    var renderAttributesTable = () => {
      return Object.keys(this.state.personData).map((i, index) => {
        var displayedData = this.state.personData[i];
        if (this.state.personData[i] && typeof this.state.personData[i] === "object") {
          displayedData = "";
          this.state.personData[i].map(subItem => {
            displayedData += subItem + "\n";
          });
        }
        return (
          <tr key={index}>
            <td>{i}</td>
            <td>{displayedData}</td>
          </tr>
        );
      });
    }

    return (
      <div className="App">
        <h4 className="back-to-home-page"><Link to="/">PEOPLE LIST</Link></h4>

        <div className="main-container">
          {this.state.isShowLoadingText ?
            <div className="loading-text-container">
              <i className="fa fa-spinner fa-spin"></i> &nbsp; Fetching Person Data...
            </div>
            :
            <React.Fragment>
              <h2>{this.state.personData.name}</h2>
              
              <table id="customers">
                <thead>
                  <tr>
                    <th>Attributes</th>
                    <th>Value</th>
                  </tr>
                </thead>
                <tbody>
                  {renderAttributesTable()}
                </tbody>
              </table>

              <div className="clear-both"></div>
            </React.Fragment>
          }
        </div>
      </div>
    );
  }
}
export default PackageOverview