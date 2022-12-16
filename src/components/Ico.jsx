

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
        icon = 'https://statics.eltiempo.es/images/weather/svg/v1/32/n100.svg'
        break;
    
    

        default:
            icon='/public/icons/clear-day.svg';
            console.log('LIMPIO'); 
    }
    return (icon)
    
}

export default Ico
