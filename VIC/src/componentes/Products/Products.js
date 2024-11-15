import React, { useContext } from 'react';
import { DataContext } from "../Context/DataContext.js";
import { Pressable, View, FlatList, Text, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { handleAddToCart } from '../Context/DataContext.js';

const Products = () => {
    const navigation = useNavigation(); // Obtén el objeto de navegación

    const { buyProducts } = useContext(DataContext); // Asegúrate de obtener buyProducts del contexto
    const productos = [
        {
            id: 1,
            productName: "Conjundo Candy",
            price: 1000,
            img: require("../../../assets/images/candyconjunto.jpg"),
			description: "Este elegante set de joyería es el complemento perfecto para cualquier ocasión especial. Incluye un par de pendientes de diseño colgante, un anillo con un solitario diamante, y otro anillo con un diseño de infinito. La joyería está hecha de plata u oro blanco y adornada con diamantes o piedras similares, añadiendo un toque de lujo y distinción a tu estilo.",
			details: "Material: Plata u oro blanco.- Piedras: Diamantes.- Incluye: Un par de pendientes, un anillo de solitario, y un anillo de infinito.- Diseño de los pendientes: Colgante con una piedra central grande y piedras más pequeñas en el aro.- *Diseño del anillo de solitario:* Diamante prominente en el centro con pequeñas piedras en la banda.- Diseño del anillo de infinito: Intricado diseño con pequeñas piedras incrustadas.- Presentación: Se exhibe sobre una superficie reflectante con un fondo de tela blanca suave para realzar su lujo.",
        },
        {
            id: 2,
            productName: "Conjunto Eco Andino",
            price: 1500,
            img: require("../../../assets/images/Conjuntoeco.jpg"),
			description: "Este elegante conjunto de ropa infantil es perfecto para ocasiones especiales. Con un diseño sofisticado y moderno, incluye una camisa de manga larga con botones y un lazo a juego, así como un pantalón con cinturilla ajustable. Los detalles en contraste en los puños y el cuello añaden un toque de distinción, haciendo que tu pequeño luzca impecable.",
			details: "- Tela: Mezcla de algodón y poliéster, suave y cómoda para la piel del niño. - Colores: Beige claro con detalles en marrón.- Incluye: Camisa con lazo y pantalón.- Tamaño: Disponible en varias tallas para niños pequeños.- Cuidado: Lavado a máquina en ciclo suave, secado a baja temperatura.",
        },
        {
            id: 3,
            productName: "Tacones Devil",
            price: 2000,
            img: require("../../../assets/images/Tacones.jpg"),
			description: "Estos elegantes zapatos de tacón alto son el complemento perfecto para cualquier ocasión especial. Con un acabado brillante y una distintiva suela roja, estos zapatos no solo destacan por su diseño sofisticado, sino también por su comodidad y estilo. La combinación del exterior negro con la suela roja les da un toque único y distinguido, ideal para quienes buscan hacer una declaración de moda.",
			details: "Material: Piel sintética con acabado brillante.Colores:* Negro exterior con suela roja.- Altura del tacón: Aproximadamente 10 cm.- Características adicionales: Plantilla acolchada para mayor comodidad.- Tamaño: Disponible en varias tallas.- Cuidado: Limpiar con un paño húmedo y guardar en un lugar seco.",
        },
        {
            id: 4,
            productName: "Vestido Bright",
            price: 2500,
            img: require("../../../assets/images/VestidoBright.jpg"),
			description: "Este adorable vestido de niña en color lila es perfecto para ocasiones especiales. Con un diseño elegante y detallado, cuenta con bordados en la parte superior y en el borde de la falda. El lazo grande de satén y la falda de tul voluminoso le dan un toque esponjoso y sofisticado, haciendo que cualquier niña se sienta como una princesa.",
			details: "Material: Algodón y tul.- Colores: Lila con detalles en el mismo tono.- Diseño:*Bordados en la parte superior y en el borde de la falda, con un lazo grande de satén.- Tamaño: Disponible en varias tallas para niñas pequeñas.- Cuidado: Lavado a mano con agua fría y secado al aire para mantener la calidad del vestido.",
        },
        {
            id: 5,
            productName: "Reloj Sideris",
            price: 20500,
            img: require("../../../assets/images/Relojsideris.jpg"),
			description: "Este lujoso reloj de pulsera es la pieza perfecta para aquellos que buscan combinar estilo y opulencia. Con una caja de oro y una correa incrustada con numerosos diamantes pequeños, este reloj no solo es una herramienta de precisión, sino también una joya que resalta. La carátula es simple y elegante, con agujas de hora, minuto y segundo en oro, y marcadores de hora también en diamante.",
			details: "Material: Caja de oro y correa incrustada de diamantes.- Diseño: Carátula con agujas de oro y marcadores de diamante.- Características adicionales: Reflexión en la superficie que realza su atractivo visual.- Tamaño: Ajustable a varias medidas de muñeca.- Cuidado: Limpiar con un paño suave para mantener el brillo y evitar el contacto con productos químicos.",
        },
        {
            id: 6,
            productName: "Alianzas Glass",
            price: 20500,
            img: require("../../../assets/images/alianzasGlass.jpg"),
			description: "Estas elegantes alianzas de boda de oro representan la unión perfecta para celebrar el amor y el compromiso eterno. El diseño de la banda masculina presenta una superficie lisa con tres ranuras paralelas, otorgándole un toque moderno y sofisticado. La banda femenina, adornada con una hilera de pequeños diamantes incrustados en una de sus ranuras, añade un brillo sutil y elegante, simbolizando la belleza y la eternidad del amor compartido.",
			details: "Material: Oro.- Piedras: Pequeños diamantes en la banda femenina.- Diseño: Banda masculina con tres ranuras paralelas; banda femenina con una hilera de diamantes.- Acabado: Superficie lisa con detalles de ranuras.- Tamaño: Disponibles en varias tallas.- Cuidado: Limpiar con un paño suave para mantener el brillo y evitar el contacto con productos químicos.",
        },
        {
            id: 7,
            productName: "Anillo Penny",
            price: 20500,
            img: require("../../../assets/images/anilloPenny.jpg"),
			description: "Este impresionante anillo de diamante es el epítome del lujo y la elegancia. Con un diseño clásico y atemporal, presenta un gran diamante de corte redondo que brilla con una claridad excepcional. El anillo tiene un acabado simple pero sofisticado, resaltando la belleza natural de la piedra y el cuidado en su elaboración.",
			details: "Material: Oro blanco o platino.- Piedra: Diamante de corte redondo.- Diseño: Banda lisa y elegante con un único diamante grande en el centro.- Características adicionales:* Alta claridad y brillo del diamante.- Tamaño: Disponible en varias tallas.- Cuidado: Limpiar con un paño suave para mantener el brillo y evitar el contacto con productos químicos",
        },
        {
            id: 8,
            productName: "Aros Tiana",
            price: 20500,
            img: require("../../../assets/images/arosTiana.jpg"),
			description: "Estos elegantes pendientes de diseño colgante son el accesorio perfecto para añadir un toque de sofisticación a cualquier atuendo. Cada pendiente presenta una piedra preciosa grande y redonda, diamantes de alta calidad, acompañada por una piedra más pequeña situada justo arriba. Fabricados en plata o oro blanco, estos pendientes reflejan la luz de manera impresionante, creando un efecto deslumbrante.",
			details: "Material: Plata u oro blanco.- Piedras: Diamantes o cristales de alta calidad.- Diseño: Colgante con una piedra central grande y una más pequeña arriba.- Características adicionales:* Acabado brillante que realza el brillo de las piedras.- Cuidado: Limpiar con un paño suave para mantener el brillo y evitar el contacto con productos químicos.",
        },
    ];

	const handleBuyPress = (product) => {
		buyProducts(product); // Use buyProducts directly from the context
		alert('Producto agregado al carrito'); // Show alert message
	  };

    
	const handleProductPress = (product) => {
        navigation.navigate('ProductDetail', { product });
    };
	

    return (
        <View style={styles.container}>
            <FlatList
                data={productos}
                renderItem={({ item }) => (
                    <Pressable onPress={() => navigation.navigate('ProductDetail', { product: item })}>
                        <View style={styles.productItem}>
                            <Image source={item.img} style={styles.productImage} />
                            <Text style={styles.productName}>{item.productName}</Text>
                            <Text style={styles.productPrice}>$ {item.price}</Text>
                            <Pressable style={styles.buyButton} onPress={() => handleBuyPress(item) }>
                                <Text style={styles.buyButtonText}>Comprar</Text>
                            </Pressable>
                        </View>
                    </Pressable>
                )}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2}
 columnWrapperStyle={styles.row}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 80,
        paddingBottom: 150,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#d9c2a7',
    },
    productItem: {
        flex: 1,
        margin: 10,
        borderBottomWidth: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 9,
        paddingTop: 2,
        alignItems: 'center',
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
    },
    productImage: {
        width: '100%',
        height: 110,
        resizeMode: 'contain',
    },
    productName: {
        marginTop: 10,
        fontWeight: 'bold',
        color: "black",
    },
    productPrice: {
        color: 'green',
    },
    row: {
        justifyContent: 'space-between',
        marginBottom: 15,
    },
    buyButton: {
        backgroundColor: "#000",
        padding: 8,
        width: 150,
        marginTop: 28,
        borderRadius: 50,
    },
    buyButtonText: {
        color: "white",
        fontSize: 16,
        textAlign: "center",
    },
});

export default Products;