import React from 'react';
import Card from '@material-ui/core/Card';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

const styles = {
    card: {
      marginBottom: 20,
      marginTop: 10,
    },
    button: {
      width:'100%',
      marginTop: 10,
      padding: 12,
      justifyContent: 'left',
      background: '#c3002f',
    },
    iconStyle: {
      position: 'absolute',
      right: 10,
    }
};

const dealerList = ({dealer}) => {
    return (
        <React.Fragment>
            <Card style={styles.card}>
                <CardContent>
                    <Typography color="textSecondary">
                        {dealer.name}
                    </Typography>
                    <Typography component="p">
                        {dealer.address.addressLine1} <br/>
                        {dealer.address.city}<br/>
                        {dealer.address.postalCode}
                    </Typography>
                    <Typography component="p">
                        {dealer.contact.phone}
                    </Typography>
                    <Button variant="contained" color="secondary" style={styles.button}>
                        Contact Dealer
                        <Icon style={styles.iconStyle}>send</Icon>
                    </Button>
                </CardContent>
            </Card>
        </React.Fragment>
    )
}

dealerList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(dealerList);
