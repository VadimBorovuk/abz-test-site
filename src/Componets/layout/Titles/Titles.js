import React, {Component} from 'react';

class Titles extends Component {
    state = {
        arrTitles: [],
        loading: true
    };

    async componentDidMount() {
        let url = 'https://jsonplaceholder.typicode.com/todos';

        //example 1

        // const response = await fetch(url);
        // const data = await response.json();
        // this.setState({arrTitles: data});

        //example 2
        // fetch(url).then((res) => res.json()).then((data)=> {this.setState({arrTitles: data})})
    }


    render() {
        return (
            <div>
                {this.state.arrTitles.map(elem => <div key={elem.id}>Title: {elem.title}</div>)}
            </div>
        );
    }
}

export default Titles;