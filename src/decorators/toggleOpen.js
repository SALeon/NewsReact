import React, {Component} from 'react';

export default (Origin) => class Wrapper extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        }
    }

    render() {
        return <Origin {... this.props} {... this.state} toggleOpen = {this.toggleOpen}/>
    }

    toggleOpen = (ev) => {
        ev && ev.preventDefault && ev.preventDefault();
        this.setState({
            isOpen: !this.state.isOpen
        })
    };
}
