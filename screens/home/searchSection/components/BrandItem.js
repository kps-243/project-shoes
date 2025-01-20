import { TouchableOpacity, View, StyleSheet, Image } from "react-native";
import { colors } from "../../../../constants/color";
import { raduis } from "../../../../constants/raduis";
import { spaces } from "../../../../constants/spaces";
import { ICON_SIZE, IS_SMALL_SCREEN, SCREEN_WIDTH, SMALL_ICON_SIZE } from "../../../../constants/sizes";
import TextBoldL from "../../../../ui-components/texts/TextBoldL";
import { brands } from "../../../../data/brands";

export default function BrandItem({item, selectedBrand, setSelectedBrand, index}) {
    const onPressBrand = () => {
        setSelectedBrand(item.name)
    }
    return (
        <TouchableOpacity 
        onPress={onPressBrand} 
        style={{ marginLeft : index === 0 ? spaces.L : 0, marginRight : index === brands.length - 1 ? spaces.L : 0}} >
            {item.name === selectedBrand ? (
            <View style={styles.selectedBrandContainer}>
                <View style={styles.iconContainer}>
                    <Image source={item.logo} style={styles.image}/>
                </View>
                <TextBoldL style={styles.brandText} >{item.name.replace("-", " ")}</TextBoldL>
            </View>
            ) : (
            <View style={[styles.iconContainer, styles.unselectedBrandContainer]}>
                <Image source={item.logo} style={styles.image}/>
            </View> )
            }
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    iconContainer: {
        backgroundColor: colors.WHITE,
        borderRadius: raduis.FULL,
        padding: IS_SMALL_SCREEN ? spaces.XS : spaces.S
    },
    image: {
        width: IS_SMALL_SCREEN ? SMALL_ICON_SIZE : ICON_SIZE,
        height: IS_SMALL_SCREEN ? SMALL_ICON_SIZE : ICON_SIZE,
        resizeMode: "contain"
    },
    unselectedBrandContainer: {
        marginTop: spaces.S
    },
    selectedBrandContainer: {
        flexDirection: "row",
        alignItems: "center",
        borderRadius: raduis.FULL,
        backgroundColor: colors.BLUE,
        padding: spaces.S
    },
    brandText: {
        color: colors.WHITE,
        marginHorizontal: spaces.M,
        textTransform: "capitalize"
    }
})