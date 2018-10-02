import React, { Component } from 'react';
import './search.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { connect } from 'react-redux';
import { createDealerAction } from '../../../store/actions/dealerActions';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing.unit,
  },
  textField: {
    flexBasis: 300,
  },
});

class SerachDealer extends Component {
    state = {
      location: '',
      dealers: []
    };

    handleChange = prop => event => {
      this.setState({ [prop]: event.target.value });
    };

    handleClickShowPassword = (event) => {
        if(this.state.location !== '') {
            console.log(this.state);
            this.props.createDealerAction(this.state);
        }
    };

    render() {
      const { classes } = this.props;

        return (
            <div className="search-view">
                <div className="c_207_1">
                    <div className="form-group">
                        <div className={classes.container} >
                            <TextField
                              id="outlined-adornment-password"
                              className={classNames(classes.margin, classes.textField)}
                              variant="outlined"
                              type="text"
                              label="Enter Your Location"
                              value={this.state.location}
                              onChange={this.handleChange('location')}
                              InputProps={{
                                endAdornment: (
                                  <InputAdornment position="end">
                                    <IconButton
                                      aria-label="Toggle password visibility"
                                      onClick={this.handleClickShowPassword}>
                                        <Visibility />
                                    </IconButton>
                                  </InputAdornment>
                                ),
                              }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

SerachDealer.propTypes = {
    classes: PropTypes.object.isRequired,
};

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

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(SerachDealer));
