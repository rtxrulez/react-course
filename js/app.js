var my_news = [
  {
    author: 'Саша Печкин',
    text: 'В четверг, четвертого числа...'
  },
  {
    author: 'Просто Вася',
    text: 'Считаю, что $ должен стоить 35 рублей!'
  },
  {
    author: 'Гость',
    text: 'Бесплатно. Скачать. Лучший сайт - http://localhost:3000'
  }
];

var photos = ['images/cat.jpg','images/dog.jpg','images/owl.jpg'];

var News = React.createClass({
    render: function() {
        var data = this.props.data;
        var newsTemplate;

        if (data.length > 0) {
            newsTemplate = data.map(function(item, index) {
                return (
                    <div key={index}>
                        <Article data={item} />
                    </div>
                )
            });
        } else {
            newsTemplate = <p>К сожалению новостей нет</p>
        }

        return (
            <div className="news">
                {newsTemplate}

                <strong className={data.length > 0 ? '':'none'}>Всего новостей: {data.length}</strong>
            </div>
        );
    }
});

var Article = React.createClass({
    render: function() {
        return (
            <article>

            </article>
        )
    }
});

var App = React.createClass({
    render: function() {
        return (
            <div className="app">
                Всем Привет.
                <News data={my_news} />
                <Comments />
            </div>
        );
    }
});



ReactDOM.render(
    <App />,
    document.getElementById('root')
);
