import React, {useState} from 'react'

import useMediaQuery from '@material-ui/core/useMediaQuery'

import './App.css'
import './assets/scss/index.scss'
import Layout from './hoc/Layout/Layout'
import ProductPage from './page/ProductPage/ProductPage'
import {Route, Switch} from 'react-router-dom'
import Home from './containers/Home/Home'
import AboutUs from './page/AboutUs/AboutUs'
import Contacts from './page/Contacts/Contacts'
import Payment from './page/Payment/Payment'
import Services from './page/Services/Services'
import Page404 from './page/Page404/Page404'
import Catalogue from './page/Catalogue/Catalogue'

const MenuContext = React.createContext(undefined)
const MediaQueryContext = React.createContext(undefined)
export {MenuContext}
export {MediaQueryContext}

const App = () => {

    const isMobile = useMediaQuery('(max-width:480px)')

    const [menuIsOpen, setMenuIsOpen] = useState(false)

    const toggleMenu = () => setMenuIsOpen(!menuIsOpen)

    return (
        <MediaQueryContext.Provider value={{isMobile}}>
            <MenuContext.Provider value={
                {
                    toggleMenu,
                    menuIsOpen
                }
            }>
                <div className="App test">
                    <Layout>
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route path='/product/:id' component={ProductPage}/>
                            <Route path='/about-us' component={AboutUs}/>
                            <Route path='/contacts' component={Contacts}/>
                            <Route path='/payment' component={Payment}/>
                            <Route path='/services' component={Services}/>
                            <Route path='/services' component={Services}/>
                            <Route path='/catalogue/:category/:style' component={Catalogue}/>
                            <Route component={Page404}/>
                        </Switch>
                    </Layout>
                </div>
            </MenuContext.Provider>
        </MediaQueryContext.Provider>
    )
}

export default App
