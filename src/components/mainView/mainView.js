import React, { Component } from 'react';
import DealersView from './dealersView/dealersView';
import { connect } from 'react-redux';
import { createDealerAction } from '../../store/actions/dealerActions';
import Grid from '@material-ui/core/Grid';
import MapView from './mapView/mapView';
import SerachDealer from './search/search';

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
        this.props.createDealerAction(this.state);
    }

    render() {
        const { dealersData } = this.props;

        return(
            <React.Fragment>
                <Grid container spacing={24}>
                    <Grid item xs={3} style={styles.paper}>
                        <SerachDealer />
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
