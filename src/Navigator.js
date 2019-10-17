import { createAppContainer, withNavigation  } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

// Screen
import Signin from './Screens/Signin'
import Signup from './Screens/Signup'

import Home from './Screens/Home'
import History from './Screens/History'
import Manage from './Screens/manage'
// import DetailProduct from './Component/detailProduct'
import Footer from './Component/footer'
import Cart from './Component/cart'
// import Cart from './Component/cart'
//Component
import AddData from './Component/addData'

const MainNavigator = createStackNavigator({
    Signin,
    Signup,
    Home,
    History,
    Footer,
    AddData,
    // DetailProduct,
    Cart,
    Manage
}, {
    headerMode: 'none',
    initialRouteName: 'Signin'
}, {
    headerMode: 'none',
    initialRouteName: 'Signup'
}, {
    headerMode: 'none',
    initialRouteName: 'Home'
}, {
    headerMode: 'none',
    initialRouteName: 'History'
},{
    headerMode: 'none',
    initialRouteName: 'AddData'
},{
    headerMode: 'none',
    initialRouteName: 'DetailProduct'
})

export default createAppContainer(MainNavigator)