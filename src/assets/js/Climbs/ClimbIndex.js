import React, { Component } from 'react'

class ClimbIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this._getClimbs();
    }

    _getClimbs() {
        
    }

    render() {
        return (
            <h1>Here we go. Climbs Component.</h1>
        )
    }
}

export default ClimbIndex