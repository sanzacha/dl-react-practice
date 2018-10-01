import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

class MapView extends Component {
    render() {
        return (
          <Map google={this.props.google} zoom={14}>
            <Marker onClick={this.onMarkerClick}
                    name={'Current location'} />

            <InfoWindow onClose={this.onInfoWindowClose}>
                <div>

                </div>
            </InfoWindow>
          </Map>
        );
    }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyCyNsRYJwAVPdVPmFbT5UX730hZPtMVLfs')
})(MapView);
