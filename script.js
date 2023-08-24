function buscar(){
    var xhr = new XMLHttpRequest();
    
    var produto = document.getElementById('produto').value;
    console.log('Realizando consulta por', produto);

    var doc = {
        'user': 'jsadmin',
        'auth_code': '132fiauiw1yhd821klaslf',
        'product': produto
    }

    xhr.onreadystatechange = ()=> {
        console.log('Consultando web service...');
        var pronto = xhr.readyState;  // a conexão foi feita?
        var estado = xhr.status;  // status da requisição?
        var resposta = xhr.responseText;  // qual a resposta
 
        // mostre apenas se tudo estiver ok (pronto => 4)      
        if(pronto == 4){ 
            console.log("Código da resposta:", estado);  
            console.log(resposta);  
    }
}
xhr.open(
    "POST", 
    "https://webservice.Empresa-A.com/consultaprecos"
);; 

// xhr.send(doc);  // envia requisição

imprimirRespostaTeste(); // teste desenvolvedor

}

function imprimirRespostaTeste(){

var respostaTeste = [
    {
        "id":1,
        "product":"Blusa estampada BluSA coleção verão",
        "store":"Empresa B",
        "price":25.99
    }, 
    {
        "id":2,
        "product":"BluSA coleção verão - blusa estampada",
        "store":"Concorrente 1",
        "price":89.99
    }, 
    {
        "id":3,
        "product":"Blusa BluSA col. verão (estampada)",
        "store":"Concorrente 2",
        "price":29.99
    }, 
    {
        "id":4,
        "product":"Blusa BluSA estampada | Collection Summer Miami",
        "store":"Concorrente 3",
        "price":19.99
    }, 
    {
        "id":5,
        "product":"BluSA - blusa estampada do verão ",
        "store":"Concorrente 4",
        "price":39.99
    },
]

saida = document.getElementById("saida");

gravar = "<table><tr><th>id</th><th>Produto</th><th>Loja</th><th>Preço</th></tr>";

for(i of respostaTeste){
    gravar = gravar + "<tr><td>" + i.id + "</td><td>" + i.product + "</td><td>" + i.store + "</td><td>R$ " + i.price + "</td></tr>";
}

gravar = gravar+"</table>";

saida.innerHTML = gravar;
}