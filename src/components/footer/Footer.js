import "./Footer.css";
function Footer(){
    return(
        //Hacer los iconos con react
        <footer>
        <div class="textofooter">
          <p>Lore ipsum dolor sit amet, consectet adipiscing elit. Elit quis enim ultrices ullamcorper. Nuc aenean auctor vel diam dictum.</p>
          <div class="iconoss">
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-facebook-f"></i>
              <i class="fa-brands fa-twitter"></i>
          </div>    
      </div>
      <div>
          <div class="alinear">
          <i class="fa-solid fa-location-dot"></i>
          <p>Avenida carrera 8, #12A-42, Bogotá DC, Colombia</p>
      </div>
      <div  class="alinear">
          <i class="fa-solid fa-phone"></i>
          <p>+57 601 4567899</p>
      </div>
      </div>
      
        <div class="politicas">
          <p>Politica de privacidad</p>
          <p>Politica de privacidad</p>
        </div>
      </footer>
    );

}

export default Footer;