import {BCActionTypes} from '../enums';

export interface SetAccountAction {
  type: BCActionTypes.saveAccountName;
  value: string;
}

export interface GetAddressInformationAction {
  type: BCActionTypes.getAddressInformation;
}

export interface UpdateAccountBalanceAction {
  type: BCActionTypes.updateAccountBalance;
  value: string;
}

export interface TransferBCAction {
  type: BCActionTypes.transferBC;
}

export interface SavingTransferRecipientAction {
  type: BCActionTypes.savedTransferRecipientAndAmount;
  value: {
    toAddress: string;
    amount: string;
  };
}

export interface ShowModalAction {
  type: BCActionTypes.showModal;
  value: boolean;
}

export interface SignOutAction {
  type: BCActionTypes.signOut;
}

export interface StoreAmountsActions {
  type: BCActionTypes.storeTransactionsAmounts;
  value: {
    amount: number[];
    fromAddresses: string[];
    toAddresses: string[];
  };
}
