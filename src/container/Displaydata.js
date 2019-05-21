import React from 'react';
import { connect } from 'react-redux';

// eslint-disable-next-line react/prop-types
function Displaydata({ data }) {
  if (!data) {
    return (
      // eslint-disable-next-line react/jsx-filename-extension
      <div>
        No Data
      </div>
    );
  }
  return (
    <div>
      <div>
        Name:
        {' '}
        {data.name}
      </div>
      <br />
      <div>
        Bio:
        {' '}
        {data.bio}
      </div>
      <br />
      <div>
        Github Followers:
        {' '}
        {data.followers}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => 
{
  // eslint-disable-next-line no-console
  console.log(state, 'state');
  return {
    data: state.data,
  };
};

export default connect(
  mapStateToProps,
  null,
)(Displaydata);
