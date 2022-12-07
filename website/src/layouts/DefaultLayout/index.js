import Footer from "../Footer";
import Header from "../Header";

function DefaultLayout({chirldren}) {
    return ( 
        <div className="App">
        <Header/>
         {chirldren}
         <Footer/>
        </div> 
       
    );
}

export default DefaultLayout;