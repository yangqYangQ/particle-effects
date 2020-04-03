import React, {Component} from 'react';
import styled, {keyframes} from 'styled-components';
import styles from './App.module.scss';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: 0,
            showParticle: false,
            type: '',
            clientX: 0,
            clientY: 0
        };
    }


    pop = (e) => {
        const {clientX, clientY} = e;
        const type = e.target.dataset.type;
        let amount = 30;
        switch (type) {
            case 'shadow':
            case 'line':
                amount = 100;
                break;
        }

        this.setState({
            type,
            amount,
            clientY,
            clientX,
            showParticle: true
        });
    };

    animationEnd = () => {
        this.setState({
            type: '',
            amount: 0,
            clientX: 0,
            clientY: 0,
            showParticle: false
        });
    };

    primaryParticle = (index) => {
        const {clientX, clientY, type} = this.state;
        let width = Math.floor(Math.random() * 20 + 5);
        let height = width;
        let destinationX = (Math.random() - 0.5) * 150;
        let destinationY = (Math.random() - 0.5) * 150;
        let duration = 500 + Math.random() * 1000;

        const frame = keyframes`
              from {
                transform: translate(${clientX - (width / 2)}px, ${clientY - (width / 2)}px);
                opacity: 1
              }
            
              to {
                transform: translate(${clientX - destinationX}px, ${clientY - destinationY}px);
                opacity: 0
              }
        `;

        const Particle = styled.div`
            width: ${width}px;
            height: ${height}px;
            background: hsl(${Math.random() * 90 + 180}, 70%, 60%);
            border-radius: 50%;
            animation: ${frame} ${duration}ms cubic-bezier(0, .9, .57, 1) 0s;
        `;

        return <Particle key={index} onAnimationEnd={this.animationEnd}/>;
    };

    squareParticle = (index) => {
        const {clientX, clientY} = this.state;
        let width = Math.floor(Math.random() * 30 + 5);
        let height = width;
        let destinationX = (Math.random() - 0.5) * 300;
        let destinationY = (Math.random() - 0.5) * 300;
        let duration = 5000 + Math.random() * 1000;
        let rotation = Math.random() * 520;

        const frame = keyframes`
              from {
                transform: translate(${clientX - (width / 2)}px, ${clientY - (width / 2)}px) rotate(0deg);
                opacity: 1
              }
            
              to {
                transform: translate(${clientX - destinationX}px, ${clientY - destinationY}px) rotate(${rotation}deg);
                opacity: 0
              }
        `;

        const Particle = styled.div`
            width: ${width}px;
            height: ${height}px;
            background: hsl(${Math.random() * 90 + 270}, 70%, 60%);
            border: 1px solid white;
            animation: ${frame} ${duration}ms cubic-bezier(0, .9, .57, 1) 0s;
        `;

        return <Particle key={index} onAnimationEnd={this.animationEnd}/>;
    };

    emojiParticle = (index) => {
        const {clientX, clientY, type} = this.state;
        let width = Math.floor(Math.random() * 30 + 5);
        let height = width;
        let destinationX = (Math.random() - 0.5) * 300;
        let destinationY = (Math.random() - 0.5) * 300;
        let duration = 5000 + Math.random() * 1000;
        let rotation = Math.random() * 520;

        const frame = keyframes`
              from {
                transform: translate(${clientX - (width / 2)}px, ${clientY - (width / 2)}px) rotate(0deg);
                opacity: 1
              }
            
              to {
                transform: translate(${clientX - destinationX}px, ${clientY - destinationY}px) rotate(${rotation}deg);
                opacity: 0
              }
        `;

        const Particle = styled.div`
            width: ${width}px;
            height: ${height}px;
            animation: ${frame} ${duration}ms cubic-bezier(0, .9, .57, 1) 0s;
        `;

        return (
            <Particle key={index} onAnimationEnd={this.animationEnd}>
                {['❤', '🧡', '💛', '💚', '💙', '💜', '🤎'][Math.floor(Math.random() * 7)]}
            </Particle>
        );
    };

    marioParticle = (index) => {
        const {clientX, clientY, type} = this.state;
        let width = Math.floor(Math.random() * 30 + 5);
        let height = width;
        let destinationX = (Math.random() - 0.5) * 300;
        let destinationY = (Math.random() - 0.5) * 300;
        let duration = 5000 + Math.random() * 1000;
        let rotation = Math.random() * 520;

        const frame = keyframes`
              from {
                transform: translate(${clientX - (width / 2)}px, ${clientY - (width / 2)}px) rotate(0deg);
                opacity: 1
              }
            
              to {
                transform: translate(${clientX - destinationX}px, ${clientY - destinationY}px) rotate(${rotation}deg);
                opacity: 0
              }
        `;

        const Particle = styled.div`
            width: ${width}px;
            height: ${height}px;
            animation: ${frame} ${duration}ms cubic-bezier(0, .9, .57, 1) 0s;
            background-image: url('//i.loli.net/2020/04/04/IQbmYT5hMZtODqJ.png');
        `;

        return (
            <Particle key={index} onAnimationEnd={this.animationEnd}/>
        );
    };

    shadowParticle = (index) => {
        const {clientX, clientY, type} = this.state;
        let color = `hsl(${Math.random() * 90 + 90}, 70%, 60%)`;
        let width = Math.floor(Math.random() * 5 + 4);
        let height = width;
        let destinationX = (Math.random() - 0.5) * 300;
        let destinationY = (Math.random() - 0.5) * 300;
        let duration = 5000 + Math.random() * 1000;
        let rotation = Math.random() * 520;

        const frame = keyframes`
              from {
                transform: translate(${clientX - (width / 2)}px, ${clientY - (width / 2)}px) rotate(0deg);
                opacity: 1
              }
            
              to {
                transform: translate(${clientX - destinationX}px, ${clientY - destinationY}px) rotate(${rotation}deg);
                opacity: 0
              }
        `;

        const Particle = styled.div`
            width: ${width}px;
            height: ${height}px;
            background: ${color};
            border-radius: 50%;
            animation: ${frame} ${duration}ms cubic-bezier(0, .9, .57, 1) 0s;
            box-shadow: 0 0 ${Math.floor(Math.random() * 10 + 10)}px ${color}
        `;

        return <Particle key={index} onAnimationEnd={this.animationEnd}/>;
    };

    lineParticle = (index) => {
        const {clientX, clientY} = this.state;
        let width = Math.floor(Math.random() * 25 + 4);
        let destinationX = (Math.random() - 0.5) * 300;
        let destinationY = (Math.random() - 0.5) * 300;
        let duration = 5000 + Math.random() * 1000;
        let rotation = Math.random() * 520 + 1000;

        const frame = keyframes`
              from {
                transform: translate(${clientX - (width / 2)}px, ${clientY - (width / 2)}px) rotate(0deg);
                opacity: 1
              }
            
              to {
                transform: translate(${clientX - destinationX}px, ${clientY - destinationY}px) rotate(${rotation}deg);
                opacity: 0
              }
        `;

        const Particle = styled.div`
            width: ${width}px;
            height: 1px;
            background: black;
            animation: ${frame} ${duration}ms cubic-bezier(0, .9, .57, 1) 0s;
        `;

        return <Particle key={index} onAnimationEnd={this.animationEnd}/>;
    };

    render() {
        const {amount, showParticle} = this.state;
        return (
            <div className={styles.page}>
                <h1>React Particle Effects</h1>
                <div className="buttons">
                    <div className="wrapper">
                        <button data-type='primary' onClick={this.pop}>click on me</button>
                    </div>
                    <div className="wrapper">
                        <button data-type='square' onClick={this.pop}>square particles</button>
                    </div>
                    <div className="wrapper">
                        <button data-type='emoji' onClick={this.pop}>emoji particles</button>
                    </div>
                    <div className="wrapper">
                        <button data-type='mario' onClick={this.pop}>mario particles</button>
                    </div>
                    <div className="wrapper">
                        <button data-type='shadow' onClick={this.pop}>shadow particles</button>
                    </div>
                    <div className="wrapper">
                        <button data-type='line' onClick={this.pop}>line particles</button>
                    </div>
                </div>
                {
                    showParticle ?
                        <div className="particles">
                            {
                                Array.from({length: amount}).map((_, index) =>
                                    this[`${this.state.type}Particle`](index)
                                )
                            }
                        </div> : null
                }
            </div>
        );
    }
}

export default App;
