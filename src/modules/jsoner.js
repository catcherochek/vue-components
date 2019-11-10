
class jsoner {
    constructor(arr){

      //this.dataval.push(arr);
    };

    dataval={
        "login":{
            route:"https://jsonplaceholder.typicode.com/posts",
            method:"GET",
        },
        "login3":{
            route:"https://jsonplaceholder.typicode.com/posts",
            method:"post",
        }

    };
    add=function(obj,key){
      this.dataval[key]=obj;
    };


    execute = function(routename,data,okHandler,errorHandler) {
        let routehanler = this.dataval[routename];
        console.log(routehanler.method);
        if (routehanler) {
          var fetcher;
          if(routehanler.method=="GET"){

            fetcher = fetch(routehanler.route, {

                method: (routehanler.method) ? routehanler.method : "GET", // *GET, POST, PUT, DELETE, etc.
               // mode: 'no-cors', // no-cors, cors, *same-origin
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                //credentials: 'same-origin', // include, *same-origin, omit
                headers: {
                 // 'Accept': 'application/json',
                 //'Content-Type': 'application/json',
                 //"Content-type": "text/html",
                  //"Content-type": "application/json; charset=UTF-8"
                  // 'Content-Type': 'application/json;charset=UTF8'
                  'Content-Type': 'text/plain'
                  //'Content-Type': 'application/x-www-form-urlencoded',
                },
                redirect: 'follow', // manual, *follow, error
                //referrer: 'no-referrer', // no-referrer, *client
                //body: JSON.stringify(data), // тип данных в body должен соответвовать значению заголовка "Content-Type"
              }
            );

          }else{
            fetcher = fetch(routehanler.route, {
                method: (routehanler.method) ? routehanler.method : "GET", // *GET, POST, PUT, DELETE, etc.
                mode: 'cors', // no-cors, cors, *same-origin
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                //credentials: 'same-origin', // include, *same-origin, omit
                headers: {
                  "Content-type": "application/json; charset=UTF-8"
                  // 'Content-Type': 'application/json;charset=UTF8'
                  //'Content-Type': 'text/plain'
                  //     'Content-Type': 'application/x-www-form-urlencoded',
                },
                redirect: 'follow', // manual, *follow, error
                //referrer: 'no-referrer', // no-referrer, *client
                body: JSON.stringify(data), // тип данных в body должен соответвовать значению заголовка "Content-Type"
              }
            );
          };

        fetcher.then(function (response) {
            //console.log(response.json());
           //console.log(response.text());
            return response.json();
          })
            .then(function (result) {
             // console.log(result);
              okHandler(result);
            })
            .catch(function (error) {
              console.log(error);
              errorHandler(error);
            });



        };
    };

    test = function(){
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "multipart/form-data; boundary=--------------------------706725638963846337360709");

      var formdata = new FormData();
      formdata.append("myval", "16");

      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        //body: formdata,
        redirect: 'follow'
      };

      fetch('http://symf4.test/read', requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }

}
export default  jsoner;

