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

      // Cadastrar Funcionario
      $('#conteudo').on('submit','#frmFuncionario',function(e){
        e.preventDefault();
        var formulario = $(this).serialize();
        $.ajax({
            type: "post",
            url: "ins_funcionario.php",
            data: formulario,
            dataType: "text",
            success: function (response) {
                if(response == "ok"){
                    $('#frmFuncionario').each(function(){
                        this.reset();
                    });
                    alert("O Funcionario foi inserido com sucesso!");
                }else{
                    alert(response);
                }
            }
        });
    });


     // Cadastrar Animal
     $('#conteudo').on('submit','#frmAnimal',function(e){
        e.preventDefault();
        var formulario = $(this).serialize();
        $.ajax({
            type: "post",
            url: "ins_Animal.php",
            data: formulario,
            dataType: "text",
            success: function (response) {
                if(response == "ok"){
                    $('#frmAnimal').each(function(){
                        this.reset();
                    });
                    alert("O Animal foi inserido com sucesso!");
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


    

// Busca Cliente
    $("#conteudo").on('click','#btn_bscClientes', function (e) {

        e.preventDefault();

        $.ajax({

            type: "post",

            url: "cliente_busca.php",

            data: "busca",

            dataType: "text",

            success: function (response) {

                $('#tblClientes').html(response);

            }

        });

    });

    // Busca Animal
    $("#conteudo").on('click','#btn_bscAnimais', function (e) {

        e.preventDefault();

        $.ajax({

            type: "post",

            url: "animal_busca.php",

            data: "busca",

            dataType: "text",

            success: function (response) {

                $('#tblAnimais').html(response);

            }

        });

    });

    // Busca Funcionario
    $("#conteudo").on('click','#btn_bscFuncionarios', function (e) {

        e.preventDefault();

        $.ajax({

            type: "post",

            url: "funcionario_busca.php",

            data: "busca",

            dataType: "text",

            success: function (response) {

                $('#tblFuncionarios').html(response);

            }

        });

    });

    // Busca Venda
    $("#conteudo").on('click','#btn_bscVenda', function (e) {

        e.preventDefault();

        $.ajax({

            type: "post",

            url: "venda_busca.php",

            data: "busca",

            dataType: "text",

            success: function (response) {

                $('#tblVenda').html(response);

            }

        });

    });

    //Selecionando Cliente
    $("#conteudo").on('focus','#cmpCl', function (e) {

        e.preventDefault();

        $.ajax({

            type: "post",

            url: "cliente_select.php",

            data: "busca",

            dataType: "text",

            success: function (response) {

                $('#cmpCl').html(response);

            }

        });

    });

//Selecionando funcionario
    $("#conteudo").on('focus','#cmpFn', function (e) {

        e.preventDefault();

        $.ajax({

            type: "post",

            url: "funcionario_select.php",

            data: "busca",

            dataType: "text",

            success: function (response) {

                $('#cmpFn').html(response);

            }

        });

    });

//Selecionando Animal
    $("#conteudo").on('focus','#cmpAn', function (e) {

        e.preventDefault();

        $.ajax({

            type: "post",

            url: "animal_select.php",

            data: "busca",

            dataType: "text",

            success: function (response) {

                $('#cmpAn').html(response);

            }

        });

    });






});
