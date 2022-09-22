import Banner from "../components/banner/Banner";
import Descripcion from "../components/descripcion/Descripcion";
import Feature from "../components/feature/Feature";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Nabvar";
import Opinions from "../components/opinions/Opinions";
import Ubication from "../components/ubication/Ubication";


function Home(){
    return( 
        <>
            <Navbar></Navbar>
            <Banner></Banner>
            <Descripcion></Descripcion>
            <Feature></Feature>
            <Ubication></Ubication>
            <Opinions></Opinions>
             <Footer></Footer>
            </>
    );
}

export default Home;