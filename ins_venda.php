<?php

    if(isset($_POST['campo_cliente'])){

        $cliente = $_POST['campo_cliente'];

        $funcionario = $_POST['campo_funcionario'];
		
		$descricao = $_POST['campo_descricao'];

        $quantidade = $_POST['campo_quant'];

        $data_venda = $_POST['campo_dataVenda'];

        $valor = $_POST['campo_valor'];

        $sql = "INSERT INTO tblvenda(cliente,funcionario,descricao,quantidade,data_venda,valor)VALUES('$cliente','$funcionario','$descricao','$quantidade','$data_venda','$valor')";

        include "conexao.php";

        if (mysqli_query($con, $sql)) {
           mysqli_close($con);
       
        echo "ok";
       
        }else{
       
        echo "Erro: " . $sql . "<br>" . mysqli_error($con);
       
     }
       
       
        }else{
       
        echo "erro";
       
     }

?>