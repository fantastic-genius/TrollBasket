import React from 'react';
import { Router, Stack, Scene, Tabs } from 'react-native-router-flux';
import { Text } from 'react-native';

//screens
import Home from '../screen/Home';
import Buy from '../screen/Buy';
import Deals from '../screen/Deals';
import Wallet from '../screen/Wallet';
import More from '../screen/More';
import ProductDetails from '../screen/ProductDetails';
import Carts from '../screen/Carts';

//components
import CustomTabBar from '../components/CustomTabBar';
import BackButton from '../components/BackButton';
import NavBar from '../components/NavBar';

const App = () => {
  return (
    <Router>
      <Stack key='root' hideNavBar>
        {/* <Scene key='home' component={Home} title='Home' /> */}
        <Tabs
          key="tabBar"
          tabBarComponent={CustomTabBar}
          hideNavBar
          default="buy"
        >
          <Scene key='home' component={Home} title='Home' />
          <Scene
            key="buy"
            component={Buy}
            title="Trollbasket"
            initial
          />
          <Scene key="deals" component={Deals} title="Deals"/>
          <Scene key="wallet" component={Wallet} title="Wallet"/>
          <Scene key="more" component={More}  title="More"/>
        </Tabs>
        <Scene
          key="productDetails" 
          component={ProductDetails}
          title="Details"
          hideNavBar={false}
          renderTitle={<NavBar title="Details" />}
        />
        <Scene
          key="carts" 
          component={Carts} 
          title="Carts"
          hideNavBar={false}
          renderTitle={<NavBar title="Carts" hideRightButton />}
        />
      </Stack>
    </Router>
  );
};

export default App;