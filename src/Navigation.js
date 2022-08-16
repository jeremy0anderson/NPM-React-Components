import React, {Component} from 'react';
import PropTypes from 'prop-types';
import * as M from '@mui/material';

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state={
            open: false
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.state!==nextState || this.props!==nextProps;
    }
    componentDidMount() {}
    componentDidUpdate(prevProps, prevState) {}
    componentWillUnmount() {}
    render() {
        return (
            <>
                
            </>
        );
    }
}

Navigation.propTypes = {};

export default Navigation;
