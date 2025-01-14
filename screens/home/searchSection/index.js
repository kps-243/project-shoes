import { View, StyleSheet } from "react-native";
import SearchInput from "../../../ui-components/inputs/SearchInput";
import BrandList from "./components/BrandsList";

export default function SearchSection({inputValue, setInputValue, selectedBrand, setSelectedBrand}) {
    return (
        <View style={styles.container}>
            <SearchInput
             placeholder="Trouvez vos shoes" 
             value={inputValue} 
             onChangeText={setInputValue} 
            />
            <BrandList selectedBrand={selectedBrand} setSelectedBrand={setSelectedBrand} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 120,
        justifyContent: "space-evenly"
    }
})