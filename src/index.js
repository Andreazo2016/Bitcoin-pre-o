import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import React, { useState } from 'react';
import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings(['Warning: ReactNative.createElement']);
console.disableYellowBox = true;


import BitcoinAnimation from './components/BitcoinAnimation';

import Home from './pages/Home';

const App = () => {

    function stopAnimation() {
        setShowAnimation(false)
    }

    const [showAnimation, setShowAnimation] = useState(true)
    return <>
        {showAnimation ? <BitcoinAnimation stopAnimation={stopAnimation} /> : <Home />}
    </>
}

export default App;