import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    input:{
        backgroundColor: '#fff',
        width: '100%',
        height: 50,
        borderStyle: 'solid',
        borderColor: 'lightgrey',
        borderWidth: 1,
        paddingLeft: 10
      },
      label:{
        fontSize: 32,
        paddingBottom: 8,
        fontWeight: '300'
      },
      buttonLog:{
        marginTop: 30,
        padding: 10,
      },
      buttonCad:{
        marginTop: 20,
        backgroundColor: 'rgba(214, 61, 57, 1)',
        padding: 10
      }
});

export default styles;