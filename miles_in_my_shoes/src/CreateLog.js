import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

class CreateLog extends Component {
    constructor() {
        super();
        this.state = {
            date: '',
            miles: '',
            type: ''
        };
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSumbit = e => {
        e.preventDefault();

        const data = {
            date: this.state.date,
            miles: this.state.miles,
            type: this.state.type
        };

        axios
        .post('http://localhost:8082/api/log', data)
        .then(res => {
            this.setState({
                date: '',
                miles: '',
                type: ''
            })
            this.props.history.push('/');
        })
        .catch(err => {
            console.log("Erroe in CreateLog!");
        })
    };

    render() {
        return(
            <div className="CreateLog">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <br/>
                            <Link to="/" className="btn btn-outline-warning float-left">
                                Show Log
                            </Link>
                        </div>
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-ceter">Add Log</h1>
                            <p className="lead text-center">
                                Create a New Log
                            </p>

                            <form noValidate onSubmit={this.onSumbit}>
                                <div className='form-group'>
                                    <input
                                    type='text'
                                    placeholder='Date'
                                    name='Date'
                                    className='form-control'
                                    value={this.state.date}
                                    onChange={this.onChange}
                                    />
                                </div>
                                <br/>

                                <div className='form-group'>
                                    <input
                                    type='number'
                                    placeholder='miles'
                                    name='miles'
                                    className='form-control'
                                    value={this.state.miles}
                                    onChange={this.onChange}
                                    />
                                </div>

                                <div className='form-group'>
                                    <input
                                    type='text'
                                    placeholder='type'
                                    name='type'
                                    className='form-control'
                                    value={this.state.type}
                                    onChange={this.onChange}
                                    />
                                </div>

                                <input
                                type="submit"
                                className="btn btn-outline-warning btn-block mt-4"
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateLog;