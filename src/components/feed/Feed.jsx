import './feed.css';
import Post from '../Post/Posts';

function Feed(){
  return(
    <div className='feed m-4'>
      <div className='feedWraper'>
        <Post/>
      </div>
    </div>
  )
}
export default Feed;