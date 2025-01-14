import { FlatList, StyleSheet} from "react-native";
import { shoes } from "../../../../data/shoes";
import VerticalCard from "./VerticalCard";
import ItemSeparator from "../../../../ui-components/separators/ListItemsSeparator";
import { spaces } from "../../../../constants/spaces";

export default function ShoesList({ selectedBrand, inputValue }) {
    
    const data = shoes
    .find((elem) => elem.brand === selectedBrand)
    .stock.filter(item => !item.new);
    console.log(inputValue)

    const filteredData = inputValue 
    ? data.filter((elem) => 
        elem.name.toLowerCase().includes(inputValue.toLowerCase())) 
    : data;
    return (
        <FlatList 
            data={filteredData}
            renderItem={({ item, index }) => 
                <VerticalCard 
                    item={item} 
                    index={index}
                />
            }
            horizontal
            ItemSeparatorComponent={<ItemSeparator width={spaces.L} />}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.listContainer}
        />
    )
}

const styles = StyleSheet.create({
    listContainer:{
        paddingHorizontal: spaces.L,
    }
})