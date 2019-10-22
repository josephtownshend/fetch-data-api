import React from 'react';

export default class FetchRandomUser extends React.Component {

// state 'loading' is true by default.
// state 'person' is null by default as we havent requested one on page load.
  state = {
    loading: true,
    person: null
  };

// this is fetching data.
// we are making this function asynchronous as we have used 'fetch'.
  async componentDidMount() {
    // storing our URL in a const.
    const url = "https://api.randomuser.me/";
    // this is 'fetching' our data and storing it in 'response'.
    // 'fetch' is an asynchronous function so we need to use 'await'.
    // it will wait for the 'async' call to finish then store in 'response'.
    const response = await fetch(url);
    // we are then getting the 'json' data from the 'response'.
    // as 'fetch' is async we use 'await'.
    const data = await response.json();
    // setting state of 'person' here and changing loading to 'false'
    this.setState({ person: data.results[0], loading: false })
  }

  render() {

    if (this.state.loading) {
      return <div>loading...</div>
    }

    if (!this.state.person) {
      return <div>no person found...</div>
    }

    return (
      <div>
        <div>{this.state.person.name.title}</div>
        <div>{this.state.person.name.first}</div>
        <div>{this.state.person.name.last}</div>
        <img src={this.state.person.picture.large} alt="profile shot"/>
      </div>
    );
  }
}
