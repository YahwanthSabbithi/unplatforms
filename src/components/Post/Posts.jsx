import './Posts.css'
import 'bootstrap/dist/css/bootstrap.css';
import {Users} from '../../data.js';
import React from 'react';
import {useState, useEffect} from 'react';
import imgs from './1.jpg';

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
                <div className="card row p-4" key={index}>
                  <div className='parent d-flex mb-2'>
                    <div className='col-md-2'>
                      <img className='img' src={imgs} alt="logo"/>
                    </div>
                    <div className='col-md-10'> 
                      <p className='h4'>{element.username}</p>
                      <span className='fs-6 text-secondary'>{element.position}</span><br/>
                      <span className='fs-6 text-secondary'>{element.duration} | {element.location}</span>
                    </div>
                  </div>
                  <div className='body mt-1'>
                    <span className='domain text-secondary'>{element.domain}</span>
                    <div className='font-weight-normal bld h6 mt-2'>{element.body}</div>
                  </div>
                    <div>
                      <div className='w-50 mt-2 countsbar d-flex justify-content-around text-secondary'>
                        <p className='fs-6'>{views} views</p>|
                        <p className='fs-6'>{like} Likes</p>|
                        <p className='fs-6'>{Comment} Comments</p>|
                        <p className='fs-6'>{Share} Shares</p>
                      </div>
                    </div>
                    <div className='w-50 countsbar d-flex justify-content-around'>
                      <button className='btn  like' onClick={likeinc}>Like</button>
                      <button className='btn  Comment' onClick={Commentinc}>Comment</button>
                      <button className='btn  Share' onClick={Shareinc}>Share</button>
                    </div>
                </div>

              )
            }
          )
        }
    </div>
  )
}

export default Posts;