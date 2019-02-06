import React, { Component } from 'react'
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
});

export class ChoiceButtons extends Component {
    render() {
        return (function TextButtons(props) {
            const { classes } = props;
            return (
                <div>
                    <Button href="#text-buttons" className={classes.button}>
                        Link
                    </Button>
                    <input
                        accept="image/*"
                        className={classes.input}
                        id="text-button-file"
                        multiple
                        type="file" />
                    <label htmlFor="text-button-file">
                        <Button component="span" className={classes.button}>
                            Upload
                        </Button>
                    </label>
                </div>
            );
        });
    }
}



ChoiceButtons.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ChoiceButtons);