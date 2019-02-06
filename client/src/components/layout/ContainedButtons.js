import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
});

export class ContainedButtons extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div data-goto={this.props.goto}>
                <Button variant="contained" href="#text-buttons" className={classes.button} onClick={this.props.onClick}>
                    {this.props.text}
                </Button>
            </div>
        );
    }
}



ContainedButtons.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContainedButtons);