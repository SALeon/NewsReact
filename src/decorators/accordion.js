import React,{Component} from 'react';

export default (Origin) => class Accordion extends Component{

    constructor(props){
        super(props);

        this.state = {
            openItem: null
        }
    }

    render () {
        return <Origin { ... this.props } { ...this.state }  toggleOpen = {this.toggleOpen}/>
    }

    toggleOpen = (id) =>         (ev) => {
            ev && ev.preventDefault && ev.preventDefault();

            if (id === this.state.openItem) {
                this.setState({
                    openItem: null
                });
            } else {
                this.setState({
                    openItem: id
                });
            }
        }
}