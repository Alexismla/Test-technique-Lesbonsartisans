import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {

    file(e){
        this.setState({
            selectFile: e.target.files[0]
        });
    }
    send() {
        var data = new FormData();
        console.log(this.state.selectFile);
        data.append('file', this.state.selectFile, this.state.selectFile.name);
        axios.post('/upload', data);
        alert('votre fichier à été upload');
    }
    render() {
        return (
            <div>
                <h1>Upload files</h1>
                    <div>
                        <div>
                        <input type="file" onChange={this.file.bind(this)}/>
                        <button onClick={this.send.bind(this)}>Upload</button>
                        </div>
                    </div>
            </div>
        );
    }
}

export default App;
