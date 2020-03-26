import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
    },

    header: {
        flexDirection: 'row',
        alignItems: "center"
    }, 

    logo: {
        marginRight: 8
    },

    incident: {
        marginTop: 32,
        padding: 24,
        borderRadius: 8,
        backgroundColor: "#FFF",
        paddingBottom: -24,
        marginBottom: 16
    },
    
    incidentProperty: {
        fontSize: 14,
        color: "#41414D",
        fontWeight: "bold"
    },

    incidentValue: {
        marginTop: 8,
        fontSize: 15,
        marginBottom: 24,
        color: "#737380"
    },

    contact: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: "#FFF",
        marginBottom: 16
    },

    heroTitle: {
        fontWeight: "bold",
        fontSize: 24,
        color: '#13131A',
    },

    heroExtra: {
        fontSize: 15,
        marginTop: 8,
        color: '#737380'
    },

    actions: {
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: "space-between"
    },

    action: {
        backgroundColor: '#E02041',
        borderRadius: 8,
        height: 50,
        width: '48%',
        justifyContent: "center",
        alignItems: "center",
    },

    actionText: {
        color: 'white',
        fontSize: 15,
        fontWeight: "bold"
    }
});