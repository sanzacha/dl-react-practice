import React, { Component } from 'react';
import DealersView from './dealersView/dealersView';
import { connect } from 'react-redux';
import { createDealerAction } from '../../store/actions/dealerActions';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import MapView from './mapView/mapView';


const styles = {
    paper: {
      padding: 20,
      textAlign: 'left',
    },
};


class MainView extends Component {
    state = {
        dealers: []
    }

    componentDidMount() {
        // console.log(this.props.createDealerAction);
        this.props.createDealerAction(this.state);

        axios.get(`https://dl-react.firebaseio.com/dealers.json`)
        .then(res => {
            const dealers = res.data;
            this.setState({ dealersData: dealers });
            // console.log('Data', dealers);
        })
    }

    render() {
        const { dealersData } = this.props;

        return(
            <React.Fragment>
                <Grid container spacing={24}>
                    <Grid item xs={3} style={styles.paper}>
                        <DealersView dealersData={dealersData} />
                    </Grid>
                    <Grid item xs={9}>
                        <MapView />
                    </Grid>
                </Grid>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        dealersData: state.dealersInfo.dealers
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createDealerAction: (dealer) => dispatch(createDealerAction(dealer))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainView);
