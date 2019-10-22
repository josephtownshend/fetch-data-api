import React from 'react';

export default class FetchRandomUser extends React.Component {

  state = {
    loading: true
  }


  componentDidMount() {}



  render() {
    return (
      <div>
        {this.state.loading ? <div>loading...</div> : <div>person...</div>}
      </div>
    );
  }
}
