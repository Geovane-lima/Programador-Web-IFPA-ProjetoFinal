$(document).ready(function(){

    $('#conteudo').on('submit','#frmEquipamento',function(e){
        e.preventDefault();
        var formulario = $(this).serialize();
        $.ajax({
            type: "post",
            url: "ins_equipamento.php",
            data: formulario,
            dataType: "text",
            success: function (response) {
                if(response == "ok"){
                    $('#frmEquipamento').each(function(){
                        this.reset();
                    });
                    alert("O Equipamento foi inserido com sucesso!");
                }else{
                    alert(response);
                }
            }
        });
    });

});
    
      

