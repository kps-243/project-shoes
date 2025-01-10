import { SafeAreaView, View, StyleSheet, StatusBar } from "react-native";
import { colors } from "../../constants/color";
import SearchSection from "./searchSection";
import ListSection from "./listSection";
import NewshSection from "./newsSection";

export default function HomeScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar/>
            <View style={{width: "100%", backgroundColor: "#000", height: 60}}/>
            <SearchSection/>
            <ListSection/>
            <NewshSection/>
            <View style={{width: "100%", backgroundColor: "#000", height: 106}}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.LIGHT,
        justifyContent: "space-between"
    }
})