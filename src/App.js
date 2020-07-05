import React, { Component } from 'react';
import grass from './Assets/Asset 1.png';
import mountain1 from './Assets/Asset 2.png';
import cloud1 from './Assets/Asset 3.png';
import cloud2 from './Assets/Asset 4.png';
import mountain2 from './Assets/Asset 5.png';
import mountain3 from './Assets/Asset 6.png';
import background from './Assets/Asset 7.png';

export class App extends Component {

    state = {
        scroll : 0
    }

    componentDidMount() {
        this.updateDimensions();
        window.addEventListener('scroll', this.updateDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.updateDimensions);
    }

    updateDimensions = (e) => {
        if (!e)
            return

        this.setState({ scroll: window.scrollY });
    }

    render() {
        const {scroll} = this.state;
        return (
            <div className="App">
                <div className={'holder'}>
                    <img style={{ top : calcTop('bkg', scroll) }} alt={''} src={background} />
                    <img style={{ top : calcTop('mountain3', scroll) }} alt={''} src={mountain3} />
                    <img style={{ top : calcTop('mountain2', scroll) }} alt={''} src={mountain2} />
                    <img style={{ top : calcTop('mountain1', scroll) }} alt={''} src={mountain1} />
                    <img style={{ top : calcTop('grass', scroll) }} alt={''} src={grass} />
                    <img style={{ top : calcTop('cloud2', scroll) }} alt={''} src={cloud2} />
                    <img style={{ top : calcTop('cloud1', scroll) }} alt={''} src={cloud1} />
                </div>
            </div>
        );
    }
}

function calcTop(item, scroll) {
    let value;

    switch(item) {
        case 'cloud2':
            value = 400-(scroll*0.4);
            break;
        case 'cloud1':
            value = 450-(scroll*0.5);
            break;
        case 'mountain3':
            value = 300-(scroll*0.05);
            break;
        case 'mountain2':
            value = 650-(scroll*0.1);
            break;
        case 'mountain1':
            value = 1200-(scroll*0.2);
            break;
        case 'grass':
            value = 1800-(scroll*0.3);
            break;
        default :
            value = 0;
            break;
    }

    return value;
}
