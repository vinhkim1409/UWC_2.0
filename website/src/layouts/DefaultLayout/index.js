import Footer from "../Footer";
import Header from "../Header";

function DefaultLayout({children}) {
    return ( 
        <div className="App">
        <Header/>
         {children}
         <Footer/>
        </div> 
       
    );
}

export default DefaultLayout;