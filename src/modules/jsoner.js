
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
          if(routehanler.method=="GET"){

            return fetch(routehanler.route, {
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
                //body: JSON.stringify(data), // тип данных в body должен соответвовать значению заголовка "Content-Type"
              }
            ).then(function (response) {
              //console.log(response.json());
              return response.json();
            })
              .then(function (result) {
                console.log(result);
                okHandler(result);
              })
              .catch(function (error) {
                console.log(error);
                errorHandler(error);
              });

          }else{

            return fetch(routehanler.route, {
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
            ).then(function (response) {
              //console.log(response.json());
              return response.json();
            })
              .then(function (result) {
                console.log(result);
                okHandler(result);
              })
              .catch(function (error) {
                console.log(error);
                errorHandler(error);
              });

          }



        }
        ;
    };


}
export default  jsoner;

