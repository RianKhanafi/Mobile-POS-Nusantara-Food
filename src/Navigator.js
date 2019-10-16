import { createAppContainer, withNavigation  } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

// Screen
import Signin from './Screens/Signin'
import Signup from './Screens/Signup'
import NavMenu from './Component/navMenu'

import Home from './Screens/Home'
import History from './Screens/History'

//Component
import AddData from './Component/addData'

const MainNavigator = createStackNavigator({
    Signin,
    Signup,
    Home,
    History,
    NavMenu,
    AddData,
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
})

export default createAppContainer(MainNavigator)