import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
    renderers
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
        <Menu renderer={renderers.Popover} rendererProps={{ placement: 'bottom' }}>
            <MenuTrigger>
                <Image source={require('../assets/menu.png')} style={{ height: 20, width: 20, marginTop: 10 }}/>
            </MenuTrigger>
            <MenuOptions>
                <View style={styles.menuView}>
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
    menuView: {
        marginHorizontal: 10,
        marginVertical: 5
    },
    menuItem: {
        fontSize: 20,
        textAlign: "right",
        marginVertical: 10
    }
})