const API_KEY=`25418e7c92ad453fab51cbfce15c74d9`;
let newsList=[];

let url=new URL(`https://newsapi.org/v2/top-headlines?country=kr&apiKey=${API_KEY}`);


const menus=document.querySelectorAll(".menus button");
//menus는 어레이,어레이 각각에 클릭 이벤트를 주자
menus.forEach((menu)=>menu.addEventListener("click",(event)=>getNewsByCategory(event)))

const input=document.getElementById("search-input");

input.addEventListener("click",(()=>input.value=""));

input.addEventListener("keypress",(function(event){if(event.key==="Enter"){searchNews()}}));
 
const getNews=async()=>{
    try{
        const response=await fetch(url);
        const data=await response.json(); 
        if(response.status===200){
            if(data.articles.length==0){
                throw new Error("No matches for your search");
            }
            newsList=data.articles;
            render();
        }else{
            throw new Error(data.message)
        }       
    }
    catch(error){
errorRender(error.message);
    }
    
}


const getLatestNews=async()=>{
//newsapi📰
//url=new URL(`https://newsapi.org/v2/top-headlines?country=kr&apiKey=${API_KEY}`);

//코알api🩵
url=new URL(`https://stately-klepon-aea1f5.netlify.app/top-headlines`);

getNews();
};

const getNewsByCategory=async(event)=>{
const category=event.target.textContent.toLowerCase();

//newsapi📰
//url=new URL(`https://newsapi.org/v2/top-headlines?country=kr&category=${category}&apiKey=${API_KEY}`);

//코알api🩵
url=new URL(`https://stately-klepon-aea1f5.netlify.app/top-headlines?category=${category}`);
getNews();
}

const searchNews=async()=>{
const keyword=input.value;
//newsapi📰
//url=new URL(`https://newsapi.org/v2/top-headlines?country=kr&q=${keyword}&apiKey=${API_KEY}`);

//코알api🩵
url=new URL(`https://stately-klepon-aea1f5.netlify.app/top-headlines?q=${keyword}`);
getNews();
}
   

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

const errorRender=(message)=>{
const errorHTML=`<div class="alert alert-danger text-center" role="alert">
  ${message}
</div>`;
document.getElementById("news-board").innerHTML=errorHTML;
}



getLatestNews();
