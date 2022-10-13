import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
} from 'react-native-popup-menu'
import {BackHandler, Image, StyleSheet, Text, View} from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage'
import {useNavigation} from "@react-navigation/native"

const logout = (navigation) => {
    AsyncStorage.removeItem('token').then(() => {
        navigation.push('Login')
    })
}

const refresh = (handleRefresh) => {
    handleRefresh.handleRefresh(true)
}

const exit = () => {
    BackHandler.exitApp()
}

const PopUpMenuComponent = (handleRefresh) => {
    const navigation = useNavigation()

    return (
        <Menu style={{alignContent: "center", marginRight: 0}}>
            <MenuTrigger  >
                <Image source={require('../assets/menu.png')} style={{ height: 20, width: 20, marginTop: 10}}/>
            </MenuTrigger>
            <MenuOptions style={{ flex: 1}}>
                <View style={{ alignContent: "center", marginTop: 20 }}>
                    <MenuOption onSelect={() => refresh(handleRefresh)}>
                        <Text style={styles.menuItem}>Refresh</Text>
                    </MenuOption>
                    <MenuOption onSelect={() => logout(navigation)}>
                        <Text style={styles.menuItem}>Logout</Text>
                    </MenuOption>
                    <MenuOption onSelect={() => exit()}>
                        <Text style={styles.menuItem}>Exit</Text>
                    </MenuOption>
                </View>
            </MenuOptions>
        </Menu>
    )
}

export default PopUpMenuComponent

const styles = StyleSheet.create({
    menuItem: {
        top: 27,
        fontSize: 20,
        letterSpacing: 0.15,
        lineHeight: 24,
        fontWeight: "500",
        fontFamily: "Roboto",
        color: "#000",
        textAlign: "center",
        height: 49,
    }
})