import React, { Component } from 'react';
import styles from './Home.module.css';

class Home extends Component {

    componentDidMount() {
        console.log(styles);
    }

    render() {
        return(
            <div className={styles.home_title}>
                <h2>Home works!</h2>
            </div>
        );
    }
}

export default Home;