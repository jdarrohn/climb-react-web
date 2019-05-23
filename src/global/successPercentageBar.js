import React, { useState, useEffect } from 'react';

export const SuccessPercentageBar = (props) => {

    const [successPercentageColor, setSuccessPercentageColor] = useState('');

    useEffect(() => {
        determineBarColor();
    });

    const determineBarColor = () => {
        const successPercentage = props.successPercentage;
        let color = '';

        if(successPercentage) {
            switch (true) {
              case (successPercentage < 25):
                  color = 'darkred';
                  break;
              case (successPercentage < 50):
                  color = 'darkorange';
                  break;
              case (successPercentage < 75):
                  color = 'gold';
                  break;
              case (successPercentage < 100):
                  color = 'mediumseagreen'
                  break;
            }
            
            setSuccessPercentageColor(color);
        }
      }

      return (
        <div>
            { props.successPercentage &&
                <div className="py-3">
                    <p className="h4"><strong>Success Percentage</strong></p>
                    <div style={{display: "flex", flexDirection: "row"}}>
                        <div style={{flex: props.successPercentage, backgroundColor: successPercentageColor, height: 10}}></div>
                        <div style={{flex: (100 - props.successPercentage), backgroundColor: 'lightgray', height: 10}}></div>
                    </div>
                    <p className="display-4">{ props.successPercentage + '%' }</p>
                </div>
            }
        </div>
    );
}