import React from 'react';
import Button from '@mui/material/Button';

class Title extends React.Component {
    constructor() {
        super();
        this.state = {
            title: "Aplikasi React Pertamaku",
            subTitle: "Dibuat dengan semangat!"
        }
    }
    changeTitle = () => {
        this.setState({
            title: "Test button berhasil"
        });
    }

    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <p>{this.state.subTitle}</p>
                <Button variant="contained" onClick={this.changeTitle}>Ubah Judul</Button>
            </div>
        );
    }
}

export default Title;