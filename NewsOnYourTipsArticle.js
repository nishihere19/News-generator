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
            console.log(document.getElementsByTagName('a').length);
        for(i=0;i<document.getElementsByTagName('a').length;i++){
            document.getElementsByTagName('a')[i].addEventListener('click',function(event){
                event.preventDefault();
                
                fullArticle(this);
                location.href='NewsOnYourTipsArticle.html';
            })
        }
        })
        
        function fullArticle(obj){
            page--;
            let url ="http://newsapi.org/v2/everything?q=technology&page="+page+"&apikey=d04f7bfb12634d56905af9b7a82f845d";

                $.getJSON(url,function(data){
                    console.log(data.articles);
                    for(i=0;i<data.articles.length;i++){
                       if(data.articles[i].url==obj.href){
                           console.log(obj.href);
                       }
                    }
                })
        }
        