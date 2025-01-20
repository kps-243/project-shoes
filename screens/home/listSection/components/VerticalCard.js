import { View, StyleSheet, Image } from "react-native";
import { colors } from "../../../../constants/color";
import { spaces } from "../../../../constants/spaces";
import { raduis } from "../../../../constants/raduis";
import TextMediumS from "../../../../ui-components/texts/TextMediumS";
import TextBoldL from "../../../../ui-components/texts/TextBoldL";
import TextMediumM from "../../../../ui-components/texts/TextMediumM";
import AntDesign from '@expo/vector-icons/AntDesign';
import { IS_LARGE_SCREEN, SCREEN_WIDTH } from "../../../../constants/sizes";

export default function VerticalCard({item, index}) {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={item.items[0].image} style={styles.image} />
            </View>
            <View style={styles.descriptionContainer}>
                <View>
                    <TextMediumS blue>TOP VENTE</TextMediumS>
                    <TextBoldL style={styles.itemName}>{item.name}</TextBoldL>
                </View>
                <TextMediumM>{item.price} €</TextMediumM>
            </View>
            <View style={styles.btn}>
                <AntDesign name="plus" size={24} color={colors.WHITE} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width: IS_LARGE_SCREEN ? SCREEN_WIDTH / 3.5 : 180,
        height: "100%",
        backgroundColor: colors.WHITE,
        borderRadius: raduis.REGULAR,
        padding: spaces.S
    },
    imageContainer:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: spaces.S
    },
    image:{
        width: "100%",
        height: "100%",
        transform: [
            {rotate: "-20deg"},
            {translateX: -spaces.S},
            {translateY: -spaces.S},

        ]
    },
    descriptionContainer: {
        flex: IS_LARGE_SCREEN ? 0.7 : 0.2,
        justifyContent: "space-between",
        padding: spaces.S
    },
    itemName: {
        marginTop: spaces.S
    },
    btn: {
        position: "absolute",
        bottom: 0,
        right: 0,
        backgroundColor: colors.BLUE,
        borderTopLeftRadius: raduis.REGULAR,
        borderBottomRightRadius: raduis.REGULAR,
        justifyContent: "center",
        alignItems: "center",
        width: 36,
        height: 36
    }
})