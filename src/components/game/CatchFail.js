import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import Grow from '@material-ui/core/Grow';
import Typography from '@material-ui/core/Typography';

class CatchFail extends Component {
    raiseDismiss = () => {
        if (this.props.onDismiss != null) this.props.onDismiss();
    }

    render() {
        return (
            <Grow in={true}>
                <div>
                    <Typography variant="caption">
                        Oops - that did not work:
                </Typography>
                    <Typography variant="body2" color="error">
                        {this.props.errorMessage}
                    </Typography>
                    <Button onClick={() => this.raiseDismiss()} fullWidth
                        color="primary"
                        variant="contained">Back</Button>
                </div>
            </Grow>
        );
    }
}

export default CatchFail;