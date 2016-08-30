var my_news = [
  {
    author: 'Саша Печкин',
    text: 'В четчерг, четвертого числа...',
    bigText: 'в четыре с четвертью часа четыре чёрненьких чумазеньких чертёнка чертили чёрными чернилами чертёж.'
  },
  {
    author: 'Просто Вася',
    text: 'Считаю, что $ должен стоить 35 рублей!',
    bigText: 'А евро 42!'
  },
  {
    author: 'Гость',
    text: 'Бесплатно. Скачать. Лучший сайт - http://localhost:3000',
    bigText: 'На самом деле платно, просто нужно прочитать очень длинное лицензионное соглашение'
  }
];

var Article = React.createClass({
  propTypes: {
   data: React.PropTypes.shape({
       author: React.PropTypes.string.isRequired,
       text: React.PropTypes.string.isRequired,
       bigText: React.PropTypes.string.isRequired
   })
  },

  getInitialState: function() {
      return {
          visible: false
      }
  },

  // обработка клика
  readmoreClick: function(e) {
      e.preventDefault();
      console.log('ok: ', this.state.visible);
      if (!this.state.visible) {
          this.setState({visible: true}, function() {
              console.info('Состояние сейчас изменилось!');
          });
      } else {
          this.setState({visible: false});
      }
  },

  render: function() {
    var author = this.props.data.author,
        text = this.props.data.text,
        bigText = this.props.data.bigText,
        visible = this.state.visible;

    console.info('render', this);

    return (
      <div className='article'>
        <p className='news__author'>{author}:</p>
        <p className='news__text'>{text}</p>
        <a href="#"
            onClick={this.readmoreClick}
            className={'news_readmore ' + (visible ? 'none': '')}>
            Подробнее
        </a>
        <p className={'news__big-text ' + (visible ? '': 'none')}>{bigText}</p>
      </div>
    )
  }
});

var News = React.createClass({
  propTypes: {
    data: React.PropTypes.array.isRequired
  },

  getInitialState: function() {
    return {
        counter: 0
    }
  },

  // Оброботчик нажатий на новости
  onTotalNewsClick: function() {
    this.setState({
        counter: ++this.state.counter
    });
  },

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
      })
    } else {
      newsTemplate = <p>К сожалению новостей нет</p>
    }

    return (
      <div className='news'>
        {newsTemplate}
        <strong
            className={'news__count ' + (data.length > 0 ? '':'none') }
            onClick={this.onTotalNewsClick}>
            Всего новостей: {data.length}
        </strong>
      </div>
    );
  }
});

var App = React.createClass({
  render: function() {
    return (
      <div className='app'>
        <h3>Новости</h3>
        <News data={my_news} />
      </div>
    );
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
