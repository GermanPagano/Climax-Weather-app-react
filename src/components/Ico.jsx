

const Ico = (icon) => {


    switch(icon){

        case 'Snow':
        icon = 'https://ssl.gstatic.com/onebox/weather/64/snow.png';
        break;

        case 'Sunny':
        icon = 'https://ssl.gstatic.com/onebox/weather/64/sunny.png'
        break;

        case 'Clouds':
        icon = 'https://ssl.gstatic.com/onebox/weather/64/cloudy.png'
        break;

        case 'Clear':
        icon = 'http://www.gstatic.com/images/icons/material/apps/weather/1x/sunny_dark_color_96dp.png'
        break;
    
        case 'Rain':
        icon = 'https://ssl.gstatic.com/onebox/weather/64/rain.png'
        break;
        
        case 'Mist':
        icon ='https://ssl.gstatic.com/onebox/weather/64/mist.png'    
        break;

        case 'Fog':
        icon ='https://ssl.gstatic.com/onebox/weather/64/fog.png'    
        break;
        
        default:
            icon='/public/icons/clear-day.svg';
            console.log('LIMPIO'); 
    }
    return (icon)
    
}

export default Ico
