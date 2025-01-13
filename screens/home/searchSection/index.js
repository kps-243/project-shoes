import { View, StyleSheet } from "react-native";
import SearchInput from "../../../ui-components/inputs/SearchInput";
import { useState } from "react"
import { spaces } from "../../../constants/spaces";
import BrandList from "./components/BrandsList";

export default function SearchSection() {
    const [inputValue, setInputValue] = useState("");
    return (
        <View style={styles.container}>
            <SearchInput
             placeholder="Trouvez vos shoes" 
             value={inputValue} 
             onChangeText={setInputValue} 
            />
            <BrandList />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 120,
        justifyContent: "space-evenly"
    }
})