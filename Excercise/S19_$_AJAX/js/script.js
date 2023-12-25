//alert("welcome test");

/* Steps */
/* 1-Get HttpRequest */
var httpReq = new XMLHttpRequest();
/* 2-Open connection between you and the server */
httpReq.open("get","https://jsonplaceholder.typicode.com/posts")
/* 3-send the request */
httpReq.send();
/*4- now  which state */
// http.readyState =0  connection not initialized
// http.readyState =1  connection established
// http.readyState =2  request recieved
// http.readyState =3  request proccessing
// http.readyState =4  request is finished response ready
//
httpReq.addEventListener('readystatechange',function(){
    console.log(httpReq.readyState);
    if(httpReq.readyState===4 && httpReq.status ===200){
        console.log(JSON.parse(httpReq.response));
    }
    console.log(httpReq.status);
})

