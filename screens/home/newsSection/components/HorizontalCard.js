import { View, StyleSheet, Image, useWindowDimensions } from "react-native";
import TextMediumM from "../../../../ui-components/texts/TextMediumM";
import TextBoldXL from "../../../../ui-components/texts/TextBoldXL";
import TextBoldM from "../../../../ui-components/texts/TextBoldM";
import { colors } from "../../../../constants/color";
import { raduis } from "../../../../constants/raduis";
import { spaces } from "../../../../constants/spaces";
import { IS_LARGE_SCREEN } from "../../../../constants/sizes";

export default function HorizontalCard({item}) {
    const { height } = useWindowDimensions();
    const landscapeImageStyle = {
        width: "100%",
        height: "100%",
        transform: [
            {rotate: "-20deg"},
            {translateX: -spaces.M},
            {translateY: -spaces.L},
            {scale: 0.8}
        ]
    }
    return (
        <View style={styles.container}>
            <View style={styles.descriptionContainer}>
                <View>
                    <TextMediumM blue>MEILLEUR CHOIX</TextMediumM>
                    <TextBoldXL>{item.name}</TextBoldXL>
                </View>
                <TextBoldM>{item.price} €</TextBoldM>
            </View>
            <View style={styles.imageContainer}>
                <Image source={item.items[0].image} style={ height <= 400 ? landscapeImageStyle : styles.image} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: "80%",
        backgroundColor: colors.WHITE,
        borderRadius: raduis.REGULAR,
        justifyContent: "space-between",
        flexDirection: "row",
        marginHorizontal: spaces.L
    },
    descriptionContainer: {
        flex: 1,
        height: "100%",
        justifyContent: "space-between",
        padding: IS_LARGE_SCREEN ? spaces.XL * 1.5 : spaces.L
    },
    imageContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: spaces.M
    },
    image: {
        width: "100%",
        height: "100%",
        transform: [
            {rotate: "-20deg"},
            {translateX: -spaces.M},
            {translateY: IS_LARGE_SCREEN ? -spaces.XL : -spaces.L},
            {scale: IS_LARGE_SCREEN ? 1.1 : 1.3}
        ]
    }
})