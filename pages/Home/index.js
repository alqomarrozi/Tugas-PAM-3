import { useState } from "react";
import { Text, View } from "react-native"
import { Card, Button, Icon, Input } from 'react-native-elements';


const Home = ({ navigation }) => {
    const [lokasi, setLokasi] = useState('')
    const [tujuan, setTujuan] = useState('')
    const [tgl, setTanggal] = useState('')


    const handleSearch = () => {

        navigation.navigate('Hasil Pencarian', {
            itemId: 86,
            otherParam: { lokasi, tujuan, tgl },
        })

    }
    return (
        <>
            <View style={{ paddingBottom: 8, height: '100%',opacity: 0.8 }}>
                <Card containerStyle={{
                    shadowColor: "#590696",
                    shadowOffset: {
                        width: 0,
                        height: 3,
                    },
                    shadowOpacity: 1,
                    shadowRadius: 4.65,

                    elevation: 7,
                    borderRadius: 10,
                    marginTop: 20
                }}>
                    <Card.Title style={{fontSize: 20,color:'#590696'}}>Penerbangan Ku</Card.Title>
                    <Card.Divider style={{backgroundColor:'#590696'}} />
                    <Text style={{ margin: 8, fontWeight: 'bold',color:'#590696' }}>Keberangkatan</Text>
                    <Input
                        onChange={(e) => setLokasi(e.nativeEvent.text)}
                        placeholder='malysia . . .'
                        isFocused={true}
                    />
                    <Text style={{ margin: 8, fontWeight: 'bold',color:'#590696' }}>Tujuan</Text>
                    <Input
                        onChange={(e) => setTujuan(e.nativeEvent.text)}
                        placeholder='singapura . . .'
                        isFocused={true}
                    />
                    <Text style={{ margin: 8, fontWeight: 'bold',color:'#590696' }}>Tanggal</Text>
                    <Input
                        onChange={(e) => setTanggal(e.nativeEvent.text)}
                        placeholder='12/12/2022'
                        isFocused={true}
                    />

                    <Button
                        onPress={() => handleSearch()}
                        buttonStyle={{
                            borderRadius: 0,
                            marginLeft: 0,
                            marginRight: 0,
                            marginBottom: 0,
                            backgroundColor: '#590696',
                            borderRadius: 4
                        }}
                        title="Cari Penerbangan"
                    />
                </Card>
            </View>
        </>
    )
}
export default Home