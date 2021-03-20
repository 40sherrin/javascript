import fetchPosts from '../api/index';

const getPosts = () => async (dispatch) => {
  try{
    const {data} = await fetchPosts();
    dispatch({type: 'FETCH_ALL', payload: [] })
  }catch(err){
    console.log(err.message);
  }
}
export default getPosts;