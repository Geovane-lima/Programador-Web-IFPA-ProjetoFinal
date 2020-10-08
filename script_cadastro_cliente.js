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

  
});
