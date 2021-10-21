import {states} from '../states';
import {BCActionTypes} from '../enums';

export const mainReducer = (state = states, action) => {
  switch (action.type) {
    case BCActionTypes.saveAccountName:
      return {...state, account: action.value};
    case BCActionTypes.updateAccountBalance:
      return {...state, accountBalance: action.value};
    case BCActionTypes.savedTransferRecipientAndAmount:
      return {
        ...state,
        tempRecipientAmount: action.value.amount,
        toAddressTemp: action.value.toAddress,
      };
    case BCActionTypes.showModal:
      return {...state, showModal: action.value};
    case BCActionTypes.signOut:
      return {
        ...state,
        account: undefined,
        password: undefined,
        transactions: {
          amounts: [],
          fromAddresses: [],
          toAddresses: [],
        },
        accountBalance: 0,
        toAddressTemp: '',
        tempRecipientAmount: '',
        showModal: false,
      };
    case BCActionTypes.storeTransactionsAmounts:
      return {
        ...state,
        transactions: {
          amounts: action.value.amount,
          toAddresses: action.value.toAddresses,
          fromAddresses: action.value.fromAddresses,
        },
      };
    default:
      return {...state};
  }
};
