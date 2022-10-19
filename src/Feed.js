import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Tweet from './Tweet';
import './Feed.css'
import { ArrowRightOutlined, Search } from '@mui/icons-material';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";



function Feed() {
  const[tweets,setTweets]=useState([]);
  const[startDate, setStartDate]=useState();
  const[endDate,setEndDate]=useState();
  const[allTweets,setAllTweets]=useState([]);
  useEffect(() => {
    (async () => {
      const res = await axios.get(
        `${"https://www.mocky.io/v2/5d1ef97d310000552febe99d"}`
      );
      console.log(res)
      setTweets(res.data.map((doc)=>
        ({
          data:doc
        })
      ));
      setAllTweets(res.data.map((doc)=>
        ({
          data:doc
        })
      ));
      //console.log(tweets)
    })();
  }, []);
  const handleClick=()=>{

    if(startDate!=="" && endDate!=="")
    {
      const start=new Date(startDate);
      //const startTimestamp=start.getTime();
      const end=new Date(endDate);
      //const endTimestamp=end.getTime();
      console.log(allTweets)
      const filtered=allTweets.filter(tweet=>{
        let filter = true
        const date=new Date(tweet.data.publishedDate.slice(0,10));
        filter=filter && (date>=start);
        filter=filter && (date<=end);
        return filter
        
      })
      console.log(filtered)
      setTweets(filtered.map((tweet)=>({
        data:tweet.data
      })))
    }
    else{
      setTweets(allTweets.data.map(data=>({
        data:data
      })))
    }
    setStartDate("")
    setEndDate("")
  }
  
  return (
    <div className='feed'>
      <div className='header'> 
        <div className='header__left'> 
            <div className='header__search'> 
            <DatePicker className='header__search__picker' selected={startDate} onChange={(date) => setStartDate(date)} placeholderText="start" />
            </div>
            <div className='header__search__arrow'> 
              <ArrowRightOutlined/>
            </div>
            <div className='header__search'> 
            <DatePicker className='header__search__picker'selected={endDate} onChange={(date) => setEndDate(date)} placeholderText="end"/>
            </div>
            <div className='header__searchIcon'> 
              <Search onClick={handleClick}/>
            </div>
        </div>
       
    </div>
       {tweets.map(({data:{_id,url,author,publishedDate,text,imageUrl,likes}},ind)=>(
            <Tweet
            key={ind}
            id={_id}
            url={url}
            author={author}
            publishedDate={publishedDate}
            text={text}
            imageUrl={imageUrl}
            likes={likes}
            />
   
         ))}   
    </div>
  )
}

export default Feed