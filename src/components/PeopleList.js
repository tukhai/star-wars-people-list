import React from 'react';


class PeopleList extends React.Component {

  shouldComponentUpdate(nextProps, nextState) {
    return (
      JSON.stringify(nextProps.peopleListData) !== JSON.stringify(this.props.peopleListData)
    );
  }

  render() {
    var renderDataList = () => {
      var dataList = this.props.peopleListData.slice();

      return dataList.map((i, index) => {
        var personId = i.url ? i.url.replace("https://swapi.co/api/people/", "").replace("/", "") : "";
        return (
          <li key={index}>
            <a href={`/people-details/${personId}`}>
              {personId !== "" ? personId : "_"}. {i.name}
            </a>
          </li>
        );
      });
    }

    return (
      <div>
        <ul id="myUL">
          {renderDataList()}
        </ul>
      </div>
    );
  }
}

export default PeopleList;
