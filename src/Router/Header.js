import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View, Dimensions, SafeAreaView, Platform, ImageBackground,Image, TouchableOpacity } from "react-native";
var { height, width } = Dimensions.get('window')
import { ProgressBar } from 'react-native-paper';
import { FONTS } from '../Fonts/Fonts'
const Header = (props) => {
    const _onDone = () => {
    }
    return props.type===0?<SafeAreaView style={{ height: height / 100 * 9, backgroundColor: '#E5E5E5', paddingLeft: 10, paddingVertical: 10, flexDirection: 'row' }}>
    <View style={{ flex: 0.4 }}>
    <Image
                style={styles.image}
                resizeMode={'center'}
                source={require('../Image/Vector.png')}/>
    </View>
</SafeAreaView>:<SafeAreaView style={{ height: height / 100 * 9, backgroundColor: '#fff', paddingLeft: 10, paddingVertical: 10, flexDirection: 'row' }}>
        <View style={{ flex: 0.4 }}>
            <Text style={{ fontSize: 30, fontFamily: FONTS.PROXIMA_NOVA, fontWeight: 'bold' }}>Zark</Text>
        </View>
        <View style={{ flex: 0.6, flexDirection: 'row' }}>
        <View style={{ flex: 0.15, flexDirection: 'column' }}></View>
            <View style={{ flex: 0.2, flexDirection: 'column' }}>
                <ImageBackground source={require('../Image/Star.png')} style={{ height: 50, width: 50, }}
                    imageStyle={{ opacity: 0.8, }}>
                    <Text style={{ color: '#fff', fontSize: 12, alignSelf: 'center', marginTop: 15 }}>12</Text>
                </ImageBackground>
            </View> 
            <View style={{ flex: 0.45, flexDirection: 'column' }}>
            <Text style={{  fontSize: 12, fontFamily: FONTS.PROXIMA_NOVA }} numberOfLines={1}>{'1200/1800'}</Text>
                <ProgressBar progress={0.4} style={{ height: 18, width: 90, borderRadius: 10, backgroundColor: '#DADADA', marginRight: 10,marginLeft:-10 }} color={'#0087ED'} />
              <View style={{flexDirection:'row'}}>
              <ImageBackground source={require('../Image/CreditSymbol.png')} style={{ height: 10, width: 10, }}
                    imageStyle={{ opacity: 0.8, }}>
                    <Text style={{ color: '#fff', fontSize: 12, alignSelf: 'center', marginTop: 15 }}>12</Text>
                </ImageBackground>
               <Text style={{  fontSize: 12, fontFamily: FONTS.PROXIMA_NOVA ,marginTop:-2,marginLeft:2}} numberOfLines={1}>{'600'}</Text>
               </View>
            </View>
            <TouchableOpacity
                style={{ flex: 0.2,flexDirection:'column' }}>
                <ImageBackground source={require('../Image/Notification.png')} style={{ height: 20, width: 20,marginRight:30,marginTop:18 }}
                    imageStyle={{ opacity: 0.8, }}>
                    <Text style={{ color: '#fff', fontSize: 12, alignSelf: 'center', marginTop: 15 }}>12</Text>
                </ImageBackground>
                <View style={{ backgroundColor: 'red', height: 18, width: 18, borderRadius: 75, position: 'absolute', top: 10,left:10, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ color: '#fff', fontSize: 10, fontFamily: FONTS.PROXIMA_NOVA, textAlign: 'center' }} numberOfLines={1}>{'10'}</Text>
                </View>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
};
const styles = StyleSheet.create({
    text: {  fontSize: 30}
});
export default Header;