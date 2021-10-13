function login() {
    //alert("Det virker");
    let navn = document.getElementById("navn").value;
    console.log(navn);
    document.getElementById("navneFelt").innerHTML = navn;
    let size = document.getElementById("size").value;
    console.log(size);
    document.getElementById("sizeFelt").innerHTML = size;
  }
  