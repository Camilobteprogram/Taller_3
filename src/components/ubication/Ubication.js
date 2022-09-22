import './Ubication.css';
function Ubication(){
    return(
        <section class="ubication">
      <h2 className='ubication-title'>Ubícanos</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.9644120170606!2d-74.07747274990444!3d4.600397243784256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f99a7147877c9%3A0x378b95e9cbda0740!2sCra.%208%20%2312a-42%2C%20Bogot%C3%A1!5e0!3m2!1ses!2sco!4v1658888158387!5m2!1ses!2sco"allowfullscreen="" loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"></iframe>
      <h3 className='adress'>AVENIDA CARRERA 8 #12A-42, BOGOTÁ DC, COLOMBIA</h3>
      <h3 className='number'>+57 6014567899</h3>
    </section>
    )
}
export default Ubication;