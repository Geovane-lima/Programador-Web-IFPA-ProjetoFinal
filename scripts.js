$(document).ready(function(){

    // Cadastrar cliente
    $('#conteudo').on('submit','#frmCliente',function(e){
        e.preventDefault();
        var formulario = $(this).serialize();
        $.ajax({
            type: "post",
            url: "ins_cliente.php",
            data: formulario,
            dataType: "text",
            success: function (response) {
                if(response == "ok"){
                    $('#frmCliente').each(function(){
                        this.reset();
                    });
                    alert("O Cliente foi inserido com sucesso!");
                }else{
                    alert(response);
                }
            }
       });  
 });
 
 //cadastrar equipamento
 $('#conteudo').on('submit','#frmequipamento',function(e){
        e.preventDefault();
        var formulario = $(this).serialize();
        $.ajax({
            type: "post",
            url: "ins_equipamento.php",
            data: formulario,
            dataType: "text",
            success: function (response) {
                if(response == "ok"){
                    $('#frmequipamento').each(function(){
                        this.reset();
                    });
                    alert("O Equipamento foi inserido com sucesso!");
                }else{
                    alert(response);
 
                }
            }
       });  
   });
 // Cadastrar Vendas
 $('#conteudo').on('submit','#frmVenda',function(e){
        e.preventDefault();
        var formulario = $(this).serialize();
        $.ajax({
            type: "post",
            url: "ins_venda.php",
            data: formulario,
            dataType: "text",
            success: function (response) {
                if(response == "ok"){
                    $('#frmVenda').each(function(){
                        this.reset();
                    });
                    alert("Venda realizada com sucesso!");
                }else{
                    alert(response);
                }
            }
        });
    });

 
 //Buscar equipamento
  $("#conteudo").on('click','#btn_bscEquipamento', function (e) {

        e.preventDefault();

        $.ajax({

            type: "post",

            url: "busca_equipamento.php",

            data: "busca",

            dataType: "text",

            success: function (response) {

                $('#tblequipamento').html(response);

            }

        });

    });
 //Buscar Cliente
  $("#conteudo").on('click','#btn_bscClientes', function (e) {

        e.preventDefault();

        $.ajax({

            type: "post",

            url: "busca_cliente.php",

            data: "busca",

            dataType: "text",

            success: function (response) {

                $('#tblcliente').html(response);

            }

        });

    });

			
 //Selecionando Cliente
    $("#conteudo").on('focus','#cmpCl', function (e) {

        e.preventDefault();

        $.ajax({

            type: "post",

            url: "select_cliente.php",

            data: "busca",

            dataType: "text",

            success: function (response) {

                $('#cmpCl').html(response);

            }

        });

    });
 
 
 //selecionando equipamento
   $("#conteudo").on('focus','#cmpEq',function(e){
       e.preventDefault();
       $.ajax({
           type:"post",
           url:"select_equipamento.php",
           data:"busca",
           dataType:"text",
           sucess: function(response){
            $('#cmpEq').html(response);
        }
    });
   });

 
 
 
 
   
 });