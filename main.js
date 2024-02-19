const API_KEY=`25418e7c92ad453fab51cbfce15c74d9`;
let news=[];

const getLatestNews=async()=>{
const url=new URL(`https://stately-klepon-aea1f5.netlify.app/top-headlines`);
const response=await fetch(url);
const data=await response.json(); 
news=data.articles;
console.log("data:",news);
};
    
getLatestNews();
 