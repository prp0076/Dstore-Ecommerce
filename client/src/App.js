import {BrowserRouter,Route,Routes} from "react-router-dom"
import Home from "./components/Home/Home"
import Category from "./components/Category/Category"
import SingleProduct from "./components/SingleProduct/SingleProduct"
import Newsletter from "./components/Footer/Newsletter/Newsletter"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Appcontext from "./utils/context"
import { Auth0Provider } from "@auth0/auth0-react";
function App() {
    return (

        <Auth0Provider
        domain="dev-f5ndwhvkzh8rg86x.us.auth0.com"
        clientId="IckR643sc9BiJy9CP88XADMmNXfuzv8M"
        authorizationParams={{
          redirect_uri: window.location.origin
        }}
      >
        <BrowserRouter>
        <Appcontext>
        <Header></Header>
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
        </Routes>
        <Routes>
            <Route path="/category/:id" element={<Category></Category>}></Route>
        </Routes>
        <Routes>
            <Route path="/product/:id" element={<SingleProduct></SingleProduct>}></Route>
        </Routes>
        <Newsletter></Newsletter>
        <Footer></Footer>
        </Appcontext>
        </BrowserRouter>
      </Auth0Provider>
        
    )
       

    
}

export default App;
