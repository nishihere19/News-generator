let page=1;
let url ="http://newsapi.org/v2/everything?q=technology&page="+page+"&apikey=d04f7bfb12634d56905af9b7a82f845d";
        page++;
        let articles=[];
        let htm=""
        $.getJSON(url,function(data){
            //console.log(data.articles);
            for(i=0;i<data.articles.length;i++){
                myarticle(data.articles[i],i);
            }
            if(document.getElementById('list')){
                document.getElementById('list').innerHTML=htm;
            }
            
           
        })
        function myarticle(article,num){
            var title=article.title;
            var articleUrl=article.url;
            var img=article.urlToImage;
            articles[i]="<li onclick='fullArticle("+JSON.stringify(article)+")' class='items' id='"+num+"'><div class='sameline' ><img src='"+img+"'><p class='title' id='title"+num+"'>"+title+"</p></div></li>";
            htm+=articles[i];
            
            
        }
        if(document.getElementById('list')){
            window.onscroll= function(ev){
                if((window.innerHeight+window.scrollY)>=document.body.offsetHeight){
                    let url ="http://newsapi.org/v2/everything?q=technology&page="+page+"&apikey=d04f7bfb12634d56905af9b7a82f845d";
                    page++;
                    $.getJSON(url,function(data){
                        //console.log(data.articles);
                        for(i=0;i<data.articles.length;i++){
                            myarticle(data.articles[i],i);
                        }
                        if(document.getElementById('list')){
                            document.getElementById('list').innerHTML=htm;
                        }
                        
                    })
    
                }
            }
        }
       
        function fullArticle(obj){
            
            page--;
            //console.log(page);
            url ="http://newsapi.org/v2/everything?q=technology&q="+obj+"&page="+page+"&apikey=d04f7bfb12634d56905af9b7a82f845d";
            //console.log(obj);
                $.getJSON(url,function(data){
                    console.log(data);
                    for(i=0;i<data.articles.length;i++){
                       if(data.articles[i].url==obj.url){
                           //console.log(obj);
                           
                           var desc= obj.description;
                           var content= obj.content;
                           var img=obj.urlToImage;
                           document.getElementsByClassName('ui-loader ui-corner-all ui-body-a ui-loader-default')[0].style.display="none";
                           htm="<img class='headimg' src='"+img+"'/><div class='title2'>"+obj.title+"</div><div class='content'>"+content+"</div><a href="+obj.url+" class='link'>For Full Article Please Click Here!</a>";
                           document.getElementById('topics').innerHTML=htm;
                           
                           //console.log(htm);
                        }
        
                    }
                })
               
        }
        