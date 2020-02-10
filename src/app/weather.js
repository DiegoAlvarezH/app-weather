export class Weather {
    constructor(city, countryCode){
        this.apikey = 'e1f3213345bd600999167b339e7cd000';
        this.city = city;
        this.countryCode = countryCode;
    
    }   

    async getWeather() {
    const URI = `https://api.openweathermap.org/data/2.5/weather?q=
        ${this.city},${this.countryCode}&appid=${this.apikey}&units=metric`;
        const reponse = await fetch(URI);
        const data = await reponse.json();
        return data;
    }

    changeLocation(city, countryCode) {
        this.city = city;
        this.countryCode = countryCode;
    }
}