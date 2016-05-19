var React = require('react');
var reactDom = require('react-dom');

var Toolbar = React.createClass({
    render() {
        return <div>Toolbar</div>;
    }
});

var HelloWorldBody = React.createClass({
    render() {
        return <div>Hello world</div>;
    }
});

class Greeter extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log('render greeter');

        return <div>Hello {this.props.name}</div>
    }
}

class Clock extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            now: '',
            caption: 'Het is:'
        };
    }

    componentWillMount() {
        setInterval(() => {
            var now = new Date().toLocaleTimeString();
            //this.state.now = now;
            this.setState({
                now: now
            })
        }, 1000);
    }

    render() {

        console.log('render clock');

        return <div>
            <Greeter name={this.props.name}/>
            {this.state.caption} {this.state.now}</div>
    }
}

var HelloWorld = React.createClass({
    getInitialState(){
      return {
          clicked : false
      }
    },
    render() {
        var name = "Maurice";

        if (this.state.clicked){
           var movies =  <MoviesConnector />;
        }

        return <div >
            <Toolbar className={"bold"}/>
            <button onClick={() => {
                this.setState({clicked : !this.state.clicked});
            } } >
                Click me to show movies</button>
            {movies}
            <Clock name={name}/>
            <HelloWorldBody />
        </div>;
    }
});

class Movie extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <li>{this.props.movie.title}</li>
    }
}
class MovieList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return <ul>
            {this.props.movies
                .map(movie => <Movie movie={movie} />)}

        </ul>
    }
}
class MoviesConnector extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            movies: []
        }
    }

    componentWillMount() {
        fetch('/api/movies')
            .then(resp => resp.json())
            .then(movies => this.setState({movies}));

    }

    render() {

        return <MovieList movies={this.state.movies} />
    }
}

reactDom.render(<HelloWorld />,
    document.getElementById('app'));