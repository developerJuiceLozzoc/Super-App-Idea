import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dashboard: {
    backgroundColor: 'green',
    height: '100%',
    width: '100%',
  },
  dashboardItems: {
    alignSelf: 'center',
  },
  logoName: {
    fontWeight: 'bold',
    fontSize: 50,
    color: 'white',
    marginBottom: 40,
  },
  inputView: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputTextSignIn: {
    height: 50,
    color: 'black',
  },
  inputTextModal: {
    borderWidth: 2,
  },
  forgot: {
    color: 'white',
    fontSize: 11,
  },
  loginBtn: {
    width: 350,
    backgroundColor: 'blue',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {
    color: 'white',
  },
  modalContainer: {
    height: '40%',
    backgroundColor: 'white',
    borderRadius: 30,
  },
  accountNameLabel: {
    alignSelf: 'center',
    fontSize: 30,
    color: 'white',
  },
  accountBalanceLabel: {
    alignSelf: 'center',
    fontSize: 60,
    color: 'red',
  },
  transactionHistoryLabel: {
    alignSelf: 'center',
    fontSize: 40,
    color: 'white',
  },
  actionSheetBottomContainer: {
    height: 80 + 200 + 50,
    marginTop: -45,
  },
  dashboardButtonsContainer: {
    justifyContent: 'center',
    height: 80,
  },
  signOutButton: {
    alignSelf: 'center',
    backgroundColor: 'red',
    width: 125,
    height: 33,
    borderRadius: 30,
    marginBottom: 25,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center', //Centered horizontally
  },
  signOutText: {


    color: 'white',
    fontSize: 12,
    alignItems: 'center', //Centered vertically
  },
  sendBCsButton: {
    alignSelf: 'center',
    backgroundColor: 'blue',
    width: 200,
    height: 50,
    borderRadius: 30,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center', //Centered horizontally
  },
  sendBCText: {
    color: 'white',
    fontSize: 14,
    marginVertical: 15,
    marginHorizontal: 50
  },


  modalHeadlineText: {
    textAlign: 'center',
    fontSize: 30,
  },
  modalRecipientTextContainer: {
    justifyContent: 'center',
    paddingHorizontal: 10,
    height: 50,
  },
  modalRecipientAmountTextContainer: {
    justifyContent: 'center',
    paddingHorizontal: 10,
    height: 70,
  },
  modalSendBCsContainer: {
    justifyContent: 'center',
    paddingHorizontal: 100,
    height: 60,
  },
  modalSendBCsButton: {
    alignItems: 'center',
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 30,
  },
  modalCancelButtonContainer: {
    justifyContent: 'center',
    paddingHorizontal: 100,
    height: 50,
  },
  modalCancelButton: {
    alignItems: 'center',
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 30,
  },
  signInErrorText: {
    color: 'red',
    fontSize: 20,
  },
  spinner: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});
