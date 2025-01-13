import { FlatList, StyleSheet} from "react-native";
import { shoes } from "../../../../data/shoes";
import VerticalCard from "./VerticalCard";
import ItemSeparator from "../../../../ui-components/separators/ListItemsSeparator";
import { spaces } from "../../../../constants/spaces";

export default function ShoesList() {
    const data = shoes[0].stock.filter(elem => !elem.new)
    return (
        <FlatList 
            data={data}
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