import { StyleSheet, Text, View, FlatList} from 'react-native';
import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Movements from '../../components/Movements';
import Actions from '../../components/Actions';

const list = [
    {
        id: 1,
        label: 'Boleto conta luz',
        value: '250,90',
        date: '22/10/2022',
        type: 0
    },
    {
        id: 2,
        label: 'Pix cliente',
        value: '550,00',
        date: '20/10/2022',
        type: 1
    },
    {
        id: 3,
        label: 'Salário',
        value: '1500,00',
        date: '17/10/2022',
        type: 1
    }
]

export default function Home() {
    return(
        <View style={styles.container}>
            <Header name="Matheus Matos"/>
            
            <Balance saldo="6.555.23" gastos="-398,00"/>

            <Actions />

            <Text style={styles.title}>Últimas movimentações</Text>

            <FlatList
                style={styles.list}
                data={list}
                keyExtractor={ (item) => String(item.id) }
                showsVerticalScrollIndicator={false}
                renderItem={ ({ item }) => <Movements data={item}/>}
            />

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
    },
    title:{
        fontSize: 18,
        fontWeight: 'boid',
        margin: 14,
    },
    list:{
        marginStart: 14,
        marginEnd: 14,
    }
});