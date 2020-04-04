import React, {Component} from 'react';

class Draggable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deltaX: '20%',
            deltaY: '40%',
            dragging: false
        };
        this.myRef = React.createRef();
    }

    onMouseDownOrUp = (e, type) => {
        e.preventDefault();
        e.stopPropagation();

        this.setState({dragging: type === 'down'});
    };

    onMouseMove = (e) => {
        e.preventDefault();
        e.stopPropagation();

        if (!this.state.dragging) return;

        this.setState({...this.getPosition(e)});
    };

    getPosition = ({clientX, clientY}) => {
        const {x, y} = this.myRef.current.getBoundingClientRect();

        return {
            deltaX: clientX - x - 150,
            deltaY: clientY - y - 30
        };
    };

    render() {
        const {deltaX, deltaY} = this.state;

        return (
            <div className='button-wrapper draggable' ref={this.myRef}>
                <button onMouseDown={e => this.onMouseDownOrUp(e, 'down')}
                        onMouseUp={e => this.onMouseDownOrUp(e, 'up')}
                        onMouseMove={this.onMouseMove}
                        style={{left: deltaX, top: deltaY}}
                >
                    drag me outside the bounds
                </button>
            </div>
        );
    }
}

export default Draggable;