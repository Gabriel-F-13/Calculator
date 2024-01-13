import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 12,
    },

    areaResult: {
        backgroundColor: "#000", 
        width: 345, 
        height: 65, 
        borderRadius: 20,
        marginTop: 130,   
    },

    areaPrev: {
        backgroundColor: 'rgba(0,0,0,0.3)', 
        borderTopLeftRadius: 12,
        borderBottomLeftRadius: 12,
        width: 155, 
        height: 35,  
        position: 'absolute',
        marginTop: 90,
        left: 205,
    },
    
    areaNumbersView: {
        width: 345, 
        height: 130,
        paddingBottom: 780,
        position: 'absolute',
    },

    textNumbers: {
        color: "#FFF", 
        fontSize: 35, 
        textAlign: 'center', 
        lineHeight: 90, 
        letterSpacing: 5,
    },

    textNumbersPrev: {
        color: "#FFF", 
        fontSize: 16,  
        textAlign: 'center', 
        lineHeight: 45,
        letterSpacing: 2,
    },

    areaButtons: {
        width: 360,
        padding: 25,
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: 'transparent',
    },

    buttons: {
        justifyContent: 'center',
        alignItems: 'center', 
        width: 80, 
        height: 90,
    },

    buttonsIcon: {
        justifyContent: 'center',
        alignItems: 'center', 
        fontSize: 30,  
    },
    
    areaButtons2: {
        marginLeft: 235,
        marginTop: -472,
        backgroundColor: 'transparent',
    },

    buttons2: {
        backgroundColor: "#ff6100", 
        justifyContent: 'center',
        alignItems: 'center', 
        width: 60, 
        height: 60,
        borderRadius: 50,
        marginLeft: 30,
    },
      
    buttonsIcon2: {
        justifyContent: 'center',
        alignItems: 'center', 
        fontSize: 30,  
        color: "#FFF",
    },
});

export {styles} 