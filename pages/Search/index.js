    import { Text, ScrollView, View, StyleSheet, Image } from "react-native";

    import { Card} from 'react-native-elements';

    const data = [
        {
            maskapai: 'Air Lanes',
            lokasi: 'malaysia',
            tujuan: 'singapura',
            tgl_berangkat: '11/03/2021',
            logo: 'https://cdn.kibrispdr.org/data/icon-pesawat-terbang-png-0.jpg',
        },
        {
            maskapai: 'City Link',
            lokasi: 'jepang',
            tujuan: 'brunei',
            tgl_berangkat: '01/04/2020',
            logo: 'https://cdn.icon-icons.com/icons2/1746/PNG/512/4047342-air-aircraft-airline-airliner-airplane-airport-airway_113505.png',
        },
        {
            maskapai: 'SRIWIJAYA AIR',
            lokasi: 'malaysia',
            tujuan: 'singapura',
            tgl_berangkat: '10/05/2022',
            logo: 'https://png.pngtree.com/png-vector/20190904/ourlarge/pngtree-aircraft-airplane-logo-or-label-flying-club-airlines-design-vector-png-image_1724658.jpg',
        },
        {
            maskapai: 'Qatar',
            lokasi: 'rusia',
            tujuan: 'england',
            tgl_berangkat: '10/06/2022',
            logo: 'https://i.pinimg.com/originals/da/51/c0/da51c000c6313d34b1cddbac21059060.jpg',
        },
        {
            maskapai: 'Batik AIr',
            lokasi: 'rusia',
            tujuan: 'korea utara',
            tgl_berangkat: '10/07/2022',
            logo: 'https://image.shutterstock.com/image-vector/plane-icon-logo-airplane-taking-600w-373146313.jpg',
        },
        {
            maskapai: 'LION AIR',
            lokasi: 'brunei',
            tujuan: 'banglades',
            tgl_berangkat: '10/08/2022',
            logo: 'https://thumbs.dreamstime.com/b/boeing-sky-vector-illustration-flying-view-below-81781587.jpg',
        },
        {
            maskapai: 'QATAR AIR',
            lokasi: 'myanmar',
            tujuan: 'papua',
            tgl_berangkat: '10/09/2022',
            logo: 'https://image.shutterstock.com/image-vector/plane-icon-logo-airplane-taking-600w-373146313.jpg',
        },
        {
            maskapai: 'GARUDA',
            lokasi: 'portugal',
            tujuan: 'argentina',
            tgl_berangkat: '10/09/2021',
            logo: 'https://image.shutterstock.com/image-vector/plane-icon-logo-airplane-taking-600w-373146313.jpg',
        },
    ];

    const Search = ({ route }) => {
        const { otherParam } = route.params;

        const hasil = data.filter(({ lokasi, tujuan, tgl_berangkat }) => {
            return tujuan.toLowerCase().includes(otherParam.tujuan.toLowerCase()) &&
                tgl_berangkat.toLowerCase().includes(otherParam.tgl.toLowerCase()) &&
                lokasi.toLowerCase().includes(otherParam.lokasi.toLowerCase())
        }
        )

        return (
            <>
                <ScrollView>
                    {
                        hasil.length > 0?
                        hasil.map((data, i) => {
                            return (
                                <View key={i} style={{ paddingBottom: 8 }}>
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
                                        backgroundColor: 'white'
                                    }}>

                                        <Card.Title >{data.maskapai}</Card.Title>
                                        <Card.Divider style={{backgroundColor:'#590696'}} />
                                        <View style={[styles.container, {
                                            flexDirection: "row"
                                        }]}>
                                            <View style={{ flex: 1, marginRight: 6 }}>
                                                <Text style={{ fontWeight: 'bold', fontSize: 14 }}>Lokasi Sekarang</Text>
                                                <Text style={{ marginBottom: 4, fontWeight: 'bold' }}>{data.lokasi}</Text>
                                                <Image
                                                    style={{ width: 90, height: 70 }}
                                                    source={{
                                                        uri: data.logo,
                                                    }}
                                                />
                                            </View>

                                            <View style={{ flex: 1 }} >
                                                <Text style={{ fontWeight: 'bold', fontSize: 14 }}>Tujuan Penerbangan</Text>
                                                <Text style={{ fontWeight: 'bold' }}>{data.tujuan}</Text>
                                                <Text style={{ marginTop: 40, color: '#590696', fontWeight: 'bold' }}>Tanggal : {data.tgl_berangkat}</Text>
                                            </View>
                                        </View>
                                    </Card>
                                </View>
                            )
                        }):
                        <View>
                            <Text style={{fontSize: 20, textAlign:'center', color:'white',fontWeight:'bold',marginTop:80}}>Keyword Tidak di Temukan</Text>
                        </View>
                    }




                </ScrollView>
            </>
        )
    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            padding: 20,
        },
    });
    export default Search;