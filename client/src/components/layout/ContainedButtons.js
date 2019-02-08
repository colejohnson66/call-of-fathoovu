import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
        border: "1px solid black",
    },
    input: {
        display: 'none',
    },
});

export class ContainedButtons extends Component {
    setGoto = () => {
        this.props.setGoto(this.props.goto);
    }

    render = () => {
        const { classes } = this.props;
        return (
            <div>
                <Button variant="contained" href="#text-buttons" className={classes.button} onClick={this.setGoto}>
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