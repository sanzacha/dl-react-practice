import React, { Component } from 'react';
import DealersView from './dealersView/dealersView';
import { connect } from 'react-redux';
import { createDealerAction } from '../../store/actions/dealerActions';
import Grid from '@material-ui/core/Grid';
import MapView from './mapView/mapView';
import SerachDealer from './search/search';
import './mainView.scss';

class MainView extends Component {
    state = {
        dealers: [],
    }

    render() {
        const { dealersData } = this.props;

        return(
            <React.Fragment>
                <Grid container spacing={24}>
                    <Grid item xs={3} className="left-wrapper">
                        <SerachDealer />
                        <DealersView dealersData={dealersData} />
                    </Grid>
                    <Grid item xs={9} className="right-container">
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

export default connect(mapStateToProps)(MainView);
