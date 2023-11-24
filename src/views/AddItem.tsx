import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import { DrawerScreenProps } from "@react-navigation/drawer";
import { useForm, Control, Controller } from "react-hook-form"
import { CustomButton, CustomInput } from "@/components";
import { launchCamera } from "react-native-image-picker";
import { Dropdown } from "react-native-element-dropdown";

type AddItemProps = DrawerScreenProps<any, 'Cargar Item'>

const AddItem = ({navigation}:AddItemProps) =>{

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            name: "",
            section:"",
            unit_type:"",
            quantity:""
        },
    })

    const onSubmit = (data:any) => { console.log(data) }

    const handleFileSubmit = async () =>{
        const response = await launchCamera({
            mediaType:'photo'
        })
        console.log(response)
    }

    const units = [
        {label: 'Paquete', value:'paquete'},
        {label: 'Kg', value:'kilo'},
        {label: 'Lata', value:'lata'}
    ]

    return(
        <View style={style.container}>
            <CustomInput name="name" control={control} placeholder="Nombre"/>

            <Pressable style={style.inputs} android_ripple={{color:'grey'}} onPress={handleFileSubmit}>
                <Text style={{textAlign:'center'}}>Imagen</Text>
            </Pressable>
            <CustomInput name="section" control={control} placeholder="Seccion"/>

            {/* <CustomInput name="unit_type" control={control} placeholder="Medida"/> */}
            <Controller 
                control={control}
                rules={{
                    required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <Dropdown
                        placeholder={"Selecciona una medida"}
                        onBlur={onBlur}
                        onChange={onChange}
                        value={value}
                        style={style.inputs}
                        data={units}
                        labelField="label"
                        valueField="value"
                    />
                )}
                name="unit_type"
            />
            <CustomInput name="quantity" valueType="numeric" control={control} placeholder="Cantidad"/>

            <CustomButton title="Cargar" onPress={handleSubmit(onSubmit)}/>
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
    inputs: {
        borderWidth: 1,
        borderColor: 'lightgrey',
        paddingHorizontal: 10,
        paddingVertical:20,
        borderRadius: 6,
        width:'100%'
    }
})

export { AddItem }