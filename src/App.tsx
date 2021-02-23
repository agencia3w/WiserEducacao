import 'react-native-gesture-handler';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import FlashMessage from "react-native-flash-message";

import Routes from './routes/app.routes';

const App: React.FC = () => (
    <NavigationContainer>
        <View style={styles.container}>
            <Routes />
            <FlashMessage position="top" />
        </View>
    </NavigationContainer>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

export default App;