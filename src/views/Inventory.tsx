import { Pressable, SectionList, StyleSheet, Text, View } from "react-native";
import { DrawerScreenProps } from "@react-navigation/drawer";
import { CustomButton, Header } from '@/components'
import { useState } from "react";

type ItemProps = {
    item:Item
}
type Item = {
    name: string,
    quantity:number
}
type Section = {
    title:string,
    data:Item[]
}
type ItemListProps = {
    data: Section[]
}
type InventoryProps = DrawerScreenProps<any, 'InventarioMain'>

const ItemComponent = ({item}:ItemProps) =>{

    const [amount, setAmount] = useState<number>(item.quantity)

    const handleIncrease = () =>{
        setAmount((prev)=>{ return prev+1})
    }
    
    const handleDecrease = () =>{
        setAmount((prev)=>{ return prev-1})
    }

    return (
        <View style={style.itemComponent} key={Math.floor(Math.random() * 10000)}>
            <Text style={{fontSize:18, color:'black'}}>{item.name}</Text>
            <View style={{display:'flex', flexDirection:'row', gap:15}}>
                <Pressable onPress={handleDecrease}><Text style={{fontSize:18, color:'black'}}>--</Text></Pressable>
                <Text style={{fontSize:18, color:'black'}}>{amount}</Text>
                <Pressable onPress={handleIncrease}><Text style={{fontSize:18, color:'black'}}>+</Text></Pressable>
            </View>
        </View>
    )
}

const ItemsList = ({data}: ItemListProps) =>{
    return (
        <SectionList 
            contentContainerStyle={{
                display:'flex',
                gap:10
            }}
            sections={data}
            renderItem={(item)=>{
                return <ItemComponent item={item.item} />
            }}
            renderSectionHeader={(section)=>{
                return <Text style={style.listHeader} key={Math.random().toPrecision(7)}>{section.section.title}</Text>
            }}
        />
    )
}

const Inventory = ({navigation}:InventoryProps) =>{

    const data = [
        {
            title: 'Alacena arriba', 
            data: [{name:'Salsa de tomate', quantity:4}, {name:'Yerba', quantity:2}, {name:'Jabon', quantity:1}]
        },
        {
            title: 'Alacena medio',
            data: [
                {name:'Arroz', quantity:4},
                {name:'Fideos', quantity:6},
                {name:'Harina', quantity:2},
                {name:'Soja texturizada', quantity:1},
            ],
        },
        {
            title: 'Alacena abajo', 
            data: [{name:'Salsa de tomate', quantity:4}, {name:'Yerba', quantity:2}, {name:'Jabon', quantity:1}]
        },
    ]

    const handleCargarItem = () =>{
        navigation.navigate('Cargar Item')
    }

    const handleOpenDrawer = () =>{
        navigation.openDrawer()
    }

    return(
        <View style={style.container}>
            <Header handleOpenDrawer={handleOpenDrawer}/>
            <View style={style.title}>
                <Text style={{textAlign:'left', fontSize:40, color:'black'}}>Lista de items</Text>
            </View>
            {
                data.length !== 0 ? <ItemsList data={data}/> : <Text>No hay items todavia.</Text>
            }
            <CustomButton title="Cargar Item" onPress={handleCargarItem}/>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'flex-start', 
        flexDirection: 'column', 
        flex: 1, 
        paddingHorizontal: 15, 
        paddingVertical:40,
        backgroundColor: 'white', 
        gap: 25,
    },
    title: {
        width: '98%',
        height: 60,
        alignSelf: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center'
    },
    itemComponent:{
        borderWidth: 0.9,
        borderColor: 'grey',
        padding: 10,
        borderRadius: 6,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    listHeader:{
        fontSize: 24,
        color: 'black',
        fontWeight: '400',
        marginBottom: 10
    }
})

export { Inventory }