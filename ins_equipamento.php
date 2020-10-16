<?php

    if(isset($_POST['campo_equipamento'])){

 $equipamento = $_POST['campo_equipamento'];

 $fabricante = $_POST['campo_fabricante'];

 $processador = $_POST['campo_processador'];

 $ram = $_POST['campo_ram'];

 $hd = $_POST['campo_hd'];

 $tela = $_POST['campo_tela'];
 
 $quantidade = $_POST['campo_quantidade'];
 
 $valor = $_POST['campo_valor'];

 $sql = "INSERT INTO tblequipamento(equipamento,fabricante,processador,ram,hd,tela, quantidade, valor)VALUES('$equipamento','$fabricante','$processador','$ram','$hd','$tela','$quantidade', '$valor')";

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