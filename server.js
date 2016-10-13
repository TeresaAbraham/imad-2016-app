var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
   'article-one': {
    title: 'Article One | Teresa',
    heading: 'Article One',
    date: '12th October 2016',
    content: `        <p>
                            this is the content of my first article.this is the content of my first article.this is the content of my first article.this is the content of my first article.this is the content of my first article.this is the content of my first article.this is the content of my first article.this is the content of my first article.this is the content of.this is the content of my first article.this is the content of my first article.this is the content of my first article.this is the content of.this is the content of my first article.this is the content of my first article.this is the content of my first article.this is the content of 
                       </p>
                        <p>
                             this is the content of my first article.this is the content of my first article.this is the content of my first article.this is the  content of my first article.this is the content of my first article.this is the content of my first article.this is the content of my first article.this is the content of my first article.this is the content of.this is the content of my first article.this is the content of my first article.this is the content of my first article.this is the content of.this is the content of my first article.this is the content of my first article.this is the content of my first article.this is the content of 
                       </p>
                         <p>
                              this is the content of my first article.this is the content of my first article.this is the content of my first article.this is  the content of my first article.this is the content of my first article.this is the content of my first article.this is the content of my first article.this is the content of my first article.this is the content of.this is the content of my first article.this is the content of my first article.this is the content of my first article.this is the content of.this is the content of my first article.this is the content of my first article.this is the content of my first article.this is the content of 
                        </p> `
},
   'article-two': {
       
       
    title: 'Article Two | Teresa',
    heading: 'Article Two',
    date: '13th October 2016',
    content: `        <p>
                            This is the content of my second article.
                      </p> `
       
   },
   'article-three': {
       title: 'Article Three | Teresa',
       heading: 'Article Three',
       date: '14th October 2016',
       content: `        <p>
                            This is the content of my third article.
                         </p> `
       
       
       
   },
  };

function createTemplate (data) {

    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
    var htmlTemplate = 
`</html>
    <head>
        <title>
                   ${title}
        </title>
        <link href="/ui/style.css" rel="stylesheet" />
        
    </head>
    <body>
        <div class="container">
        
             <div>
                 <a href="/"> Home </a>
             </div>
                 <hr/> 
                 <h3>
                    ${heading}
                 </h3>
             <div>
                    ${date}
             </div>
             <div>
                    ${content}
             </div> 
        </div>
    </body>
</html>
 `;
 return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function (req, res){
    // articleName == article-one
    // articles[articleName] == {} content object for article one
    var articleName = req.params.articleName;
   res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
