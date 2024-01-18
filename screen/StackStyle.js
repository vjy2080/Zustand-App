import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  mainView: {
    marginVertical: 30,
    alignItems: 'center'
  },
  countText: {
    marginVertical: 20,
    fontSize: 35
  },
  header1: {
    fontSize: 20,
    textAlign: 'center'
  },
    main: {
    flex: 1,
    paddingTop: 50,
    padding: 10,

  },
  isLoading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  isLoadingText: {
    fontSize: 40,
    color: 'red'
  },
  modeButton: {
    borderWidth: 1,
    borderColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10
  },
  card: {
    backgroundColor: 'rgb(196, 241, 107)',
    margin: 10,
    padding: 10,
    borderRadius: 10
  },
  header: {
    marginBottom: 15,
    fontSize: 25,
    textAlign: 'center',
    color: 'yellow',
    backgroundColor: 'green',
    padding: 5,
    borderRadius: 20
  },
  userID: {
    marginVertical: 5,
    color: 'brown',
    fontSize: 20
  },
  title: {
    marginVertical: 5,
    color: 'red',
  },
  body: {
    marginVertical: 5,
    color: 'blue'
  },
})
