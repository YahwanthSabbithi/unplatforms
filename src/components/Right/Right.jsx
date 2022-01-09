import './Right.css';
import imgs from '../2.jpeg';
function Right (){
  return(
    <div className="rightbar">
      <div className="rightbarWrapper">
        <img className='w-75' src={imgs} alt="nope"/>
        <hr className='w-75 ms-4'/>
        <div className='dropdown ms-2'>
          <a className='dropdown-item active' href=" ">Interships</a>
          <a className='dropdown-item' href=" ">Carrer Oppurtunites</a>
          <a className='dropdown-item' href=" ">Upcoming Webnairs</a>
        </div>
        <div class="today mx-auto mt-3 ps-3">
          <div class="today-piece  top  day">Monday</div>
          <div class="today-piece  middle  month">January</div>
          <div class="today-piece  middle  date">9th</div>
          <div class="today-piece  bottom  year">2022<p className='sub'>React  internship</p></div>
        </div>
      </div>
      
    </div>
  )
}

export default Right;