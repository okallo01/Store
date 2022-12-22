import { StyleSheet } from "react-native";

const norseBlue = '#004c97';

const styles = StyleSheet.create({
    HomePageTitle: {
        alignItems: "center",
        marginTop: 80,
        backgroundColor:"#004c97",
        marginLeft: 20,
        marginRight: 20,
        padding: 20,
        borderRadius: 10
    },
    HomePageTitleText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 23
    },
    homebackground: {
        height: "100%",
    },
    HomePageText: {
        alignItems: "center",
        padding: 15
    },
    HomePageTextSize: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold"
    },
    Aboutus : {
        padding:10
    },
    Aboutusimage: {
        height:"100%"
        
    },
    AboutusText: {
        textAlign:"center",
        marginTop:"60%",
        fontWeight:"bold",
        fontSize: 30,
        padding: 20,
        color: "white"
    },
    contactus : {
        marginTop: 50,
        backgroundColor: "blue",
        position:"absolute",
        padding: 10,
        borderRadius: 10,
        right:20
    },
    contactustext:{
        color:"white",
        alignItems:"center"
    },
    contactusbackground: {
        height:"100%"
    },
    contactform: {
        color:"white",
        fontSize: 20,
        fontWeight: "bold",
        backgroundColor:"white",
        padding: 10,
        color:"blue",
        fontSize: 20,
        justifyContent:"space-between",
        marginTop: 20,
        marginRight: 20,
        marginLeft: 20,
        borderRadius: 20
    },
    hometext: {
        fontSize: 50,
        fontWeight: "900",
        padding: 10,
        color:"#004c97",
        textAlign:"center",
        marginTop: "60%",
    },
    imagesize: {
        flex: 1,
        resizeMode: "recover"
        
        
    },
    imagesbox: {
        alignSelf:"center",
        width: "90%",
        height: 500,
        // backgroundColor: "gray",
        borderColor:"gray",
        borderBottomWidth: 2,
        marginTop: 10,
        borderRadius: 10,
        padding: 10
        
    },
    producttext: {
        fontWeight: "bold",
    },
    buynowbutton: {
        backgroundColor: "#004c97",
        position: "relative",
        alignSelf: "flex-start",
        padding: 10,
        borderRadius: 10,
    },
    price:{
        fontSize: 30,
        fontWeight: "bold"
    },
    searchbar: {
        backgroundColor: "#004c97",
        marginTop: 50,
        height: 60,
        marginLeft: 30,
        marginRight: 30,
        borderRadius: 10,
        flexDirection: "row"
    },
    input: {
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 10,
        width: "80%",
        backgroundColor: "white",
        borderRadius: 10,
    }
});

export default styles