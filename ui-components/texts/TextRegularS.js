import {Text, StyleSheet} from 'react-native';
import { textSize } from '../../constants/textSize';
import { colors } from '../../constants/color';

const TextRegularS = ({children, blue = false}) => {
    return(
        <Text style={[styles.txt, {color : blue ? colors.BLUE : colors.DARK}]}>{children}</Text>
    )
}

export default TextRegularS

const styles = StyleSheet.create({
    txt: {
        fontFamily: "Regular",
        fontSize: textSize.S
    }
})