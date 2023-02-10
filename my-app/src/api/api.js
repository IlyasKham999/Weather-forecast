const apiKey = 'ac15695e1b065772b96c79785fc5e671'
// tocen с сайта OpenWeather
const cityId = "551487"
// id города можно найти на сайте www.openweathermap.org находите свой город и в url появляеться id города


fetch('http://api.openweathermap.org/data/2.5/weather?id=' + cityId + '&lang=ru&appid=' + apiKey).then(function (resp) {return resp.json() }).then(function (data) {
    //добавляем название города
    document.querySelector('.weather__city').textContent = data.name;
    //data.main.temp содержит значение в Кельвинах, отнимаем от  273, чтобы получить значение в градусах Цельсия
    document.querySelector('.weather__forecast').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
    //Добавляем описание погоды
    document.querySelector('.weather__desc').textContent = data.weather[0]['description'];
    //Добавляем иконку погоды
    document.querySelector('.weather__icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
    })
    .catch(function () {
        //Обрабатываем ошибки
    });

