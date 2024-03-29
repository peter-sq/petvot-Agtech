import './SeasonDisplay.css';
import React from 'react';


const sseasonConfig = {
    summer: {
        text: "Blur, its chilly' lets hit the beach",
        iconName: 'sun'
    },
    winter:{
        text: "Bur its cold",
        iconName: 'snowflakes'
    }
};

const seasonConfig = {
    summer: {
        text: 'lets hit the beach',
        iconName: 'sun'
    },
    winter: {
        text: 'bur its cold',
        iconName: 'snowflake'
    }
};


const getSeason = (lat, month) => {
    if (month > 2 && month < 9 ){
        return lat > 0 ? 'summer' : 'winter';
    } else{
        return lat > 0 ? 'winter' : 'summer';
    }

};

const SeasonDisplay = props => {
   const season = getSeason(props.lat, new Date().getMonth());
   const {text, iconName} = seasonConfig[season];
   
return (
    <div className = {`season-display ${season}` }>
    <i className = {`icon-left huge ${iconName} icon`} />
    <h1>{text}</h1>
    <i className = {`icon-right huge ${iconName} icon`} />
    </div>
   ); 
};

export default SeasonDisplay;
