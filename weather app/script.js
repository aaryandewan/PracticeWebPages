console.log("New bro");
var temps = new Array();
      var times = new Array();
      var clouds = new Array();
      var obj = {};
      var lat = 0;
      var long = 0;
      var urlLive =
        "api.openweathermap.orgdata/2.5/weather?lat={lat}&lon={lon}&appid={your api key}";
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          successFunction,
          errorFunction
        );
      }
      //Gets latitude and longitude;
      function successFunction(position) {
        var lat = position.coords.latitude;
        var long = position.coords.longitude;
        console.log(lat, long);
        getLiveWeather(lat, long);
      }

      function errorFunction() {
        console.log("Yo bro sup?");
      }
      console.log("HAHAH");
      function getLiveWeather(x, y) {
        var url =
          "https://api.openweathermap.org/data/2.5/forecast?lat=" +
          x +
          "&lon=" +
          y +
          "&appid=67a40fd6a677c4cfd8d0c19b81631f2a&units=metric";
        fetch(url)
          .then(response => {
            return response.json();
          })
          .then(data => {
            console.log(data);
            console.log('12');
            obj = data;
            for (var c = 0; c < 40; c++) {
              temps.push(obj.list[c].main.feels_like);
              clouds.push(obj.list[c].clouds.all);
              var date = obj.list[c].dt_txt;
              if (date.split(" ")[1] == "03:00:00")
                times.push(date.split(" ")[0].split("-")[2] + "th");
              else times.push(" ");
            }
            fetch('https://api.openweathermap.org/data/2.5/weather?lat='+ x + '&lon='+y+ '&appid=67a40fd6a677c4cfd8d0c19b81631f2a&units=metric').then((response2) => {
              return response2.json();
            }).then (secondCallJson => {
               console.log(secondCallJson);
              $(".tempp").text(secondCallJson.main.feels_like + " C");
            })
            $(".city").text(obj.city.name);
            draw("Temp for the next 5 days", temps, times, "myChart");
            draw("Cloudiness for the next 5 days", clouds, times, "myChart2");

            console.log(times); //Just for experimental purposes
          });
      }

      function draw(chartName, yaxis, xaxis, canvasID) {
        let myChart = document.getElementById(canvasID).getContext("2d");

        // Global Options
        Chart.defaults.global.defaultFontFamily = "Lato";
        Chart.defaults.global.defaultFontSize = 18;
        Chart.defaults.global.defaultFontColor = "white";

        let massPopChart = new Chart(myChart, {
          type: "line", // The graphs can be changed to bar, horizontalBar, pie, line, doughnut, radar, polarArea
          data: {
            labels: xaxis,
            datasets: [
              {
                label: "Population",
                data: yaxis,
                backgroundColor: "white",
                // backgroundColor:[ ],//Add an array of colors, that you want to give to each bar on the graph! 
                borderWidth: 1,
                borderColor: "#777",
                hoverBorderWidth: 3,
                hoverBorderColor: "#000"
              }
            ]
          },
          options: {
            title: {
              display: true,
              fontFamily: "Cinzel",
              text: chartName,
              fontSize: 25,
              fontColor: "white"
            },
            legend: {
              display: false,
              position: "right",
              labels: {
                fontColor: "#000"
              }
            },
            layout: {
              padding: {
                left: 50,
                right: 0,
                bottom: 0,
                top: 0
              }
            },
            tooltips: {
              enabled: true
            }
          }
        });
      }
