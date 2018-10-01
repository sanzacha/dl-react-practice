import React from 'react';
import DealerList from './dealerList/dealerList';

const styles = {
    styles: {
      height: 650,
      overflow: 'scroll',
    },
};

const DealersView = ({dealersData}) => {
    return (
       <div style={styles.styles}>
          { dealersData && dealersData.map(dealer => {
              return (
                <DealerList dealer={dealer} key={dealer.id} />
              )
          })}
       </div>
    )
}

export default DealersView;
