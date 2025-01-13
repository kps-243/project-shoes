import { View, StyleSheet, TouchableOpacity } from "react-native";
import { spaces } from "../../../constants/spaces";
import TextBoldL from "../../../ui-components/texts/TextBoldL";
import TextMediumM from "../../../ui-components/texts/TextMediumM";

export default function Banner({ text }) {
    const onPress = () => {}
    return (
        <View style={styles.container}>
            <TextBoldL>{ text }</TextBoldL>
            <TouchableOpacity onPress={onPress}>
                <TextMediumM blue>Voir tout</TextMediumM>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: spaces.L,
        marginBottom: spaces.M
    }
})