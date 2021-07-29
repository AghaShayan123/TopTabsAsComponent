import React from 'react';
import { View, Dimensions } from 'react-native';
import { TopTabs } from '../navigation';

const {width, height} = Dimensions.get('window')

export default Test1 = () => {
    return(
        <View style={{flex: 1, paddingHorizontal: 20}}>
            <View style={{height: height * 0.2}} />
            {/* <TopTabs /> */}
        </View>
    )
}