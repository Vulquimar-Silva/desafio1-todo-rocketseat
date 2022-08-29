import { StyleSheet, Image } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#262626',
    padding: 24
  },
  input: {
    flex: 1,
    height: 56,
    backgroundColor: '#333333',
    borderColor: '#262626',
    borderRadius: 5,
    borderWidth: 1,
    color: '#FFF',
    padding: 16,
    fontSize: 16,
    marginRight: 10,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 24,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#1E6F9F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 36,
    marginBottom: 42,
  },
  listTaskText1: {
    color: '#808080',
    fontSize: 14,
    textAlign: 'center'
  },
  listTaskText2: {
    color: '#6B6B6B',
    fontSize: 14,
    textAlign: 'center'
  },
  listContainer: {
    flex: 1,
    marginTop: 40
  },
  logo: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 68
  },
  clipboard: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  taskCompleted: {
    color: '#8284FA'
  },
  taskCreate: {
    color: '#4EA8DE',
  },
  accountTasks: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  create: {
    flexDirection: "row",
    alignItems: "center",
  },
  completed: {
    flexDirection: "row",
    alignItems: "center",
  },
  numberTaskAccountCreated: {
    color: '#FFF',
    width: 25,
    borderRadius: 50,
    backgroundColor: "#333333",
    marginLeft: 8,
    textAlign: 'center'
  },
  numberTaskAccountCompleted: {
    color: '#FFF',
    width: 25,
    borderRadius: 50,
    backgroundColor: "#333333",
    marginLeft: 8,
    textAlign: 'center'
  },
  line: {
    height: 1,
    width: '100%',
    borderRadius: 1,
    borderWidth: 1,
    borderColor: '#333333',
    borderStyle: 'solid'
  },
  borderLineGray: {
    borderColor: '#262626'
  },
  borderLinePurple: {
    borderColor: '#5E60CE'
  },
})