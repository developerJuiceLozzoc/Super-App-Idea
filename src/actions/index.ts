import {BCActionTypes} from '../enums';
import {
  GetAddressInformationAction,
  SavingTransferRecipientAction,
  SetAccountAction,
  ShowModalAction,
  SignOutAction,
  StoreAmountsActions,
  TransferBCAction,
  UpdateAccountBalanceAction
} from '../interfaces';

export const setAccountAction = (account: string): SetAccountAction => {
  return {
    type: BCActionTypes.saveAccountName,
    value: account,
  };
};

export const getAddressInformationAction = (): GetAddressInformationAction => {
  return {
    type: BCActionTypes.getAddressInformation,
  };
};

export const updateAccountBalanceAction = (
  balance: string,
): UpdateAccountBalanceAction => {
  return {
    type: BCActionTypes.updateAccountBalance,
    value: balance,
  };
};

export const transferBCAction = (): TransferBCAction => {
  return {
    type: BCActionTypes.transferBC,
  };
};

export const savingTransferRecipientAction = (
  toAddress: string,
  amount: string,
): SavingTransferRecipientAction => {
  return {
    type: BCActionTypes.savedTransferRecipientAndAmount,
    value: {
      toAddress: toAddress,
      amount: amount,
    },
  };
};

export const showModalAction = (show: boolean): ShowModalAction => {
  return {
    type: BCActionTypes.showModal,
    value: show,
  };
};

export const signOutAction = (): SignOutAction => {
  return {
    type: BCActionTypes.signOut,
  };
};

export const storeAmountsAction = (
  amount: number[],
  toAddresses: string[],
  fromAddresses: string[],
): StoreAmountsActions => {
  return {
    type: BCActionTypes.storeTransactionsAmounts,
    value: {
      amount,
      toAddresses,
      fromAddresses,
    },
  };
};
