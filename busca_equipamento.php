<?php
   $sql = "SELECT * FROM tblequipamento";

    include "conexao.php";

    $resposta = "";

    if ($resultado = mysqli_query($con, $sql)) {

        while ($lh = mysqli_fetch_assoc($resultado)) {

            $resposta .= "<tr>";
			
			$resposta .= "<td>".$lh['id_equipamento']."</td>";

            $resposta .= "<td>".$lh['equipamento']."</td>";

            $resposta .= "<td>".$lh['fabricante']."</td>";

            $resposta .= "<td>".$lh['processador']."</td>";

            $resposta .= "<td>".$lh['ram']."</td>";

            $resposta .= "<td>".$lh['hd']."</td>";

            $resposta .= "<td>".$lh['tela']."</td>";
			
			$resposta .= "<td>".$lh['quantidade']."</td>";

            $resposta .= "<td>".$lh['valor']."</td>";

            $resposta .= "</tr>";

        }

        mysqli_close($con);

        echo $resposta;

    }else{

        mysqli_close($con);

        echo "Erro: " . $sql . "<br>" . mysqli_error($con);

    }
?>
  