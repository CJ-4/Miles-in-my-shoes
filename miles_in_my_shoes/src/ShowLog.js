import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

class ShowLog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            log: []
        };
    }

    componentDidMount() {
        axios
        .get('http://localhost:8082/api/log')
        .then(res => {
            this.setState({
                log :res.data
            })
        })
        .catch(err => {
            console.log('Error from ShowLog');
        })
    };

    render() {
        const log = this.state.log;
        console.log("Log List:" + log);
        let logList;

        if (!log) {
            logList = " There is no log!";
        } else {
            logList = log.map((log, k) =>
                <logList log={log} key={k} />
            );
        }

        return (
            <div className="ShowLog">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <br />
                            <h2 className="display-4 text center">Logs</h2>
                        </div>

                        <div className="clo-md-11">
                            <Link to="/create-log" className="btn btn-outline-warning float-right">
                               + Add New Log 
                            </Link>
                            <br />
                            <br />
                            <hr />
                        </div>

                    </div>

                    <div className="list">
                        {logList}
                    </div>
                </div>
            </div>

        );
        
    }
}
 export default ShowLog;