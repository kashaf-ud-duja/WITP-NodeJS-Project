import * as React from 'react';
import { View, Text , StyleSheet} from 'react-native';

export default function Profile ({navigation}){

return(


    <View style={{flex:1 , alignItems: 'center', justifyContent: 'center'}}>
        <Text
        onPress={()=>navigation.navigate('')}
        style={{fontSize: 26 , fontWeight: 'bold' }}
        >
            Details Screen
        </Text>

    </View>
);
}
