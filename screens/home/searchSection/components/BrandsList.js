import { FlatList, StyleSheet } from "react-native";
import { brands } from "../../../../data/brands.js"
import BrandItem from "./BrandItem.js";
import { spaces } from "../../../../constants/spaces.js";
import { useState } from "react";
import ItemSeparator from "../../../../ui-components/separators/ListItemsSeparator.js";

export default function BrandList() {
    const [selectedBrand, setSelectedBrand] = useState("nike");
    return (
        <FlatList 
        showsHorizontalScrollIndicator={false}
        horizontal
        data={brands} 
        keyExtractor={(item) => item.name} 
        renderItem=
        {
            ({item, index}) => 
            <BrandItem item={item} 
            selectedBrand={selectedBrand} 
            setSelectedBrand={setSelectedBrand}
            index={index} 
            />
        }
        style={styles.listContainer}
        contentContainerStyle={styles.contentStyle}
        ItemSeparatorComponent={<ItemSeparator width={spaces.S} />}
        />
    )
}

const styles = StyleSheet.create({
    listContainer: {
        flexGrow: 0,
    },
    contentStyle: {
        justifyContent: "space-between"
    }
})