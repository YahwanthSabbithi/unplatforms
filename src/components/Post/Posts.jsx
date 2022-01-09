import './Posts.css'
import 'bootstrap/dist/css/bootstrap.css';
import {Users} from '../../data.js';
import React from 'react';
import {useState, useEffect} from 'react';

function Posts(){
  const [like, setLike] = useState(0);
  function likeinc(){
    setLike((likecount)=>{
      return likecount+1;
      }
    )
  }
  const [Comment, setComment] = useState(0);
  function Commentinc(){
    setComment((commcount)=>{
      return commcount+1;
      }
    )
  }
  const [Share, setShare] = useState(0);
  function Shareinc(){
    setShare((Sharecount)=>{
      return Sharecount+1;
      }
    )
  }
  const [views,setviews] = useState(0);
  useEffect(()=>
      setviews((viewcount)=>{
        return viewcount+1;
      }
    ),[]
  )
  return(
   
    <div className="post">
        {Users.map((element,index)=>{
              return(
                <div className="card p-4" key={index}>
                  <div>
                    <img className='card-img' src={element.profilePicture} alt="logo"/>
                    <span>{element.username}</span>
                    <span className='fs-6 text-secondary'>{element.position}</span>
                    <div className='w-50 countsbar d-flex justify-content-around'>
                      <p className='fs-6 text-secondary'> {views} views |</p>
                      <p className='fs-6 text-secondary'>{like} Likes |</p>
                      <p className='fs-6 text-secondary'>{Comment} Comments|</p>
                      <p className='fs-6 text-secondary'>{Share} Shares </p>
                    </div>
                  </div>
                  <button className='like' onClick={likeinc}>like</button>
                  <button className='Comment' onClick={Commentinc}>Comment</button>
                  <button className='Share' onClick={Shareinc}>Share</button>
                  
                </div>

              )
            }
          )
        }
    </div>
  )
}

export default Posts;