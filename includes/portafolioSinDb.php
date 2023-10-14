<?php
    $directorioImagenes = "build\img\imgPaginasD";
    
        
 //esto ya funciona, modificar
?>


<section class="frame framePortafolio" id="portafolio">
        
        <div class="contenedor">
            <div class="contenedorBtnRegresar">
                <div class="btn btnRegresar">Regresar</div> 
            </div>

            <?php 
                if (is_dir($directorioImagenes)) {
                    $carpetas = array_diff(scandir($directorioImagenes), array('..', '.')); // Obtén la lista de elementos en el directorio excluyendo . y ..
                    
                    foreach ($carpetas as $carpeta) {
                        include "$directorioImagenes/$carpeta/datos.php";
            ?>
                <div class="contenedorSuperiorPortafolio">
                    <a href="#">
                        <picture class="pictureImgDesktop">

                            <source srcset="<?php echo $directorioImagenes . '/' . $carpeta ?>/grande.webp">
                            <img src="<?php echo $directorioImagenes . '/' . $carpeta ?>/grande.png" alt="Imagen de pagina web de ejemplo en modo escritorio">
                        </picture>
                    </a>
        
                </div>
        
                <div class="contenedorInferiorPortafolio">
                    <a href="#">
                        <picture class="pictureImgDesktop">
                            <source srcset="<?php echo $directorioImagenes . '/' . $carpeta ?>/peque.webp">
                            <img src="<?php echo $directorioImagenes . '/' . $carpeta ?>/peque.png" alt="Imagen de pagina web de ejemplo en modo telefono">
                        </picture>
                    </a>
            
        
                    <div class="contenedorTextoPortafolio">
                            <h4>
                                <?php echo $nombrePagina; // Accede a la variable definida en datos.php para esta carpeta ?>
                            </h4>
                            <p>
                                <?php echo $descripcionPagina; // Accede a la variable definida en datos.php para esta carpeta ?>
                            </p>
                        <ul>
                            <li>-</li>
                            <li>+</li>
                            <li>-</li>
                            <li>+</li>
                            <li>-</li>
                        </ul>
                    </div>
                </div>

            <?php
            }
               } else {
                echo 'La carpeta no existe o no es un directorio válido.';
            }
            ?>
        </div>
        



    </section>