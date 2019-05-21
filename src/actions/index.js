import axios from 'axios';
import { FETCH_DATA } from './types';


const apiurl = 'https://api.github.com/users/SivaCse';

const fetchdata = data => ({
  type: FETCH_DATA,
  payload: data,
});


// eslint-disable-next-line import/prefer-default-export
export const fetchasync = () => dispatch => axios.get(apiurl)
  .then((response) => {
    dispatch(fetchdata(response.data));
  })
  .catch((error) => {
    throw (error);
  });
