var filas = 7;
var columnas = 3;


function generate_table() {
    var c = filas;
    var f = columnas;
    var formulario = document.getElementById("myForm");
    // get the reference for the body
    var body = document.getElementsByTagName("body")[0];
  
    // creates a <table> element and a <tbody> element
    var tbl = document.createElement("table");
    var tblBody = document.createElement("tbody");
  

    //x.setAttribute("id", "myForm");
    //document.body.appendChild(x);
    // creating all cells
    for (var i = 0; i < c; i++) {
      
      //texto primera columna
      if(j < 2){
      var title = document.createTextNode("hola");
      }
      else{
        var title = document.createTextNode("adios");
      }
     
      
     
      // creates a table row
      if(i == 0 ){
        var header = document.createElement("tr");
      }
      else{
      var row = document.createElement("tr");
      }
      for (var j = 0; j < f; j++) {
        // Create a <td> element and a text node, make the text
        // node the contents of the <td>, and put the <td> at
        // the end of the table row
        
        var cell = document.createElement("td"); 
        
        if(i != 0 && j != 0){
        var x = document.createElement("INPUT"); 
          x.setAttribute("type", "number");
          x.setAttribute("placeholder", "5");
          x.setAttribute("id", "tumama_" + i + "_" + j); 
          cell.appendChild(x);
          //document.body.appendChild(x);
        }
        if(j == 0){
          cell.appendChild(title);
          header.appendChild(cell);
        }
        
        if(i==0){
          cell.appendChild(title);
          header.appendChild(cell);
        }
        else{
        row.appendChild(cell);
        }
      }
      if(i==0){
      tblBody.appendChild(header);
      }
      // add the row to the end of the table body
      else{
      tblBody.appendChild(row);
      }
      
    }

    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    // appends <table> into <body>
    formulario.appendChild(tbl);
    // sets the border attribute of tbl to 2;
    tbl.setAttribute("border", "2");


    
}


var form = document.getElementById("myForm")
var respuestas = Array();
form.addEventListener("submit", function (e){
  e.preventDefault();


 
    for(i = 0;i <filas; i++)
    {
      for(j = 0; j < columnas; j++){
        if((i != 0) && (j!=0)){
          respuestas[i+j] = document.getElementById("tumama_" + i + "_" + j);
          console.log(respuestas[i+j]);
      }
    }
  }  
})