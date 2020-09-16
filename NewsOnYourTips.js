let page=1;
let url ="http://newsapi.org/v2/everything?q=technology&page="+page+"&apikey=d04f7bfb12634d56905af9b7a82f845d";
        page++;
        let articles=[];
        let htm=""
        $.getJSON(url,function(data){
            console.log(data.articles);
            for(i=0;i<data.articles.length;i++){
                myarticle(data.articles[i],i);
            }
            document.getElementById('list').innerHTML=htm;
        })
        function myarticle(article,num){
            var title=article.title;
            var articleUrl=article.url;
            var img=article.urlToImage;
            articles[i]="<li class='items' id='"+num+"'><div class='sameline' ><img src='"+img+"'><a href='"+articleUrl+"' class='title' id='title"+num+"'>"+title+"</a></div></li>";
            htm+=articles[i];
        }
        window.onscroll= function(ev){
            if((window.innerHeight+window.scrollY)>=document.body.offsetHeight){
                let url ="http://newsapi.org/v2/everything?q=technology&page="+page+"&apikey=d04f7bfb12634d56905af9b7a82f845d";
                page++;
                $.getJSON(url,function(data){
                    console.log(data.articles);
                    for(i=0;i<data.articles.length;i++){
                        myarticle(data.articles[i],i);
                    }
                    document.getElementById('list').innerHTML=htm;
                })

            }
        }
        