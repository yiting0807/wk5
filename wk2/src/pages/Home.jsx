import Header from"../components/Header"
import ProductList from"../components/ProducList"
import Footer from"../components/Footer"
function Home(){
    const style={
     mainLayout:{
        display:'grid',
        minHeight:'100vh',
        gridTemplateAreas:
         'header' ,
         'content',
         'footer',

         gridTemplateRows:'auto 1fr auto',
         gap:'1em',
     },

     layoutHeader:{
        gridArea:'header',
        padding:0,
        height:'auto',
        lineHeight:1.6,
        backgroundColor:'#111828',
     },

     layoutFooter:{
        gridArea:'footer',
        padding:0,
        height:'auto',
        lineHeight:1.6,
        backgroundColor:'#111828',
     },

     layoutContent:{
        gridArea:'concent',
        backgroundColor:'#111828',
     },
     
     


    }
    return(

        <div className="container" style={StyleSheet.mainLayout}>
            <Header style={style.layoutHeader}
                    title="NORDIC NEST Shopping Cart"
                    slogan="An example made by Vite."
            />

            <ProductList style={style.layoutContent}/>
            <Footer style={style.layoutFooter}/>
        </div>
    );
}

export default Home;