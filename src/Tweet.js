
import { Launch, ThumbUpAltOutlined } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import React from 'react'
import InputOption from './InputOption'
import "./Tweet.css"

function Tweet({id,url,author,publishedDate,text,imageUrl,likes}) {
  const date=new Date();
  const publish=new Date(publishedDate);
  let year="";
  let month="";
  let day="";
  let hour="";
  if(date.getFullYear()-publish.getFullYear()>0){year=date.getFullYear()-publish.getFullYear()}
  if(date.getFullYear()-publish.getFullYear()<=0 && date.getMonth()-publish.getMonth>0){month=date.getMonth()-publish.getMonth}
  if(date.getFullYear()-publish.getFullYear()<=0 && date.getMonth()-publish.getMonth<=0 && date.getDay()-publish.getDay()>0){day=date.getDay()-publish.getDay()}
  if(date.getFullYear()-publish.getFullYear()<=0 && date.getMonth()-publish.getMonth<=0 && date.getDay()-publish.getDay()<=0 && date.getHours()-publish.getHours()>0){hour=date.getHours()-publish.getHours()}
  return (
    <div className='tweet'>
        <div className='tweet__header'>
        <Avatar src={""} >{author?.[0]}</Avatar>
        <div className='tweet__info'>
                <h2>{author}{"."}{year?`${year}year ago`:month?`${month}month ago`:day?`${day}day ago`:hour?`${hour}h`:""}</h2>    
            </div>
        </div>

        <div className='tweet__body'>
            <p style={{marginLeft:'20px'}}>{text}
            </p>
            <p className='tweet__image'>{(imageUrl)?(<img src={imageUrl} alt="" />):("")}</p>
        </div>
        <div className='tweet__buttons'>
            <InputOption Icon={ThumbUpAltOutlined} color="gray" title="like" count={likes} clickedColor="rgb(29, 155, 240)"/>
            <a href={url}><InputOption Icon={Launch} color="rgb(29, 155, 240)" title="view original" clickedColor="rgb(29, 155, 240)"/></a>
            
        </div>
        
    </div>
  )
}

export default Tweet