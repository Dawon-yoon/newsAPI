const API_KEY=`25418e7c92ad453fab51cbfce15c74d9`;
let newsList=[];

const getLatestNews=async()=>{
const url=new URL(`https://stately-klepon-aea1f5.netlify.app/top-headlines`);
const response=await fetch(url);
const data=await response.json(); 
newsList=data.articles;
render();
console.log("data:",newsList);
};
    

const render=()=>{
    const newsHTML=newsList.map(news=>`<div class="row news">
            <div class="col-lg-4">
                <img class="news-img" src=${
                   news.urlToImage? news.urlToImage:"img/noimage.png"
                }>
            </div>
            <div class="col-lg-8">
                 <h2>${news.title}</h2>
                 <p>${
                    news.description==null || news.description=="" ? "내용 없음":news.description.length>200? news.description.substring(0,200)+"...":news.description
                }</p>
                <div>${news.source.name||"no source"} | ${moment(news.publishedAt).fromNow()}</div>
            </div>
        </div>`).join('');
    //join('')어레이를 문자열로 바꿔주는 함수
    document.getElementById("news-board").innerHTML=newsHTML;
}

getLatestNews();
