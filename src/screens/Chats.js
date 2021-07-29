import React, {useState} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default Books = ({navigation}) => {
    const [chat, setChat] = useState(false)
    return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            {
                chat === false ? 
                <TouchableOpacity onPress={() => setChat(true)}>
                    <Text>
                        Chats
                    </Text>
                </TouchableOpacity> :
                <TouchableOpacity onPress={() => setChat(false)}>
                    <Text>
                        Messages
                    </Text>
                </TouchableOpacity>
            }
        </View>
    )
}