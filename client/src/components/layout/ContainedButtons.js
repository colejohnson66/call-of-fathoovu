import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
    button: {
        margin: theme.spacing.unit,
        border: "1px solid black",
    }
});

export class ContainedButtons extends Component {
    handleClick = () => {
        this.props.setGoto(this.props.goto);
    }

    render = () => {
        const { classes } = this.props;
        return (
            <Button variant="contained" href="#" className={classes.button} onClick={this.handleClick}>
                {this.props.text}
            </Button>
        );
    }
}

ContainedButtons.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContainedButtons);