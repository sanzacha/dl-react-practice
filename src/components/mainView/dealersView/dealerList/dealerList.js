import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = {
    card: {
      marginBottom: 20,
      marginTop: 10,
    },
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
                </CardContent>
            </Card>
        </React.Fragment>
    )
}

export default dealerList;
