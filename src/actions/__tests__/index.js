import {
  getAddressInformationAction, savingTransferRecipientAction,
  setAccountAction,
  setPasswordAction,
  showModalAction,
  signOutAction,
  storeAmountsAction,
  transferBCAction,
  updateAccountBalanceAction,
} from '../index';
import {BC} from '../../enums';

describe('actions', () => {
  it('should return correct signOut action', () => {
    const action = signOutAction();
    expect(action.type).toEqual(BC.signOut);
  });

  it('should return correct set account action', () => {
    const action = setAccountAction('mockAccount');
    expect(action.type).toEqual(BC.saveAccountName);
    expect(action.value).toEqual('mockAccount');
  });

  it('should return get address information action', () => {
    const action = getAddressInformationAction();
    expect(action.type).toEqual(BC.getAddressInformation);
  });

  it('should return update account balance action', () => {
    const action = updateAccountBalanceAction();
    expect(action.type).toEqual(BC.updateAccountBalance);
  });

  it('should return transfer job coin action', () => {
    const action = transferBCAction();
    expect(action.type).toEqual(BC.transferBC);
  });

  it('should return saving transaction recipient action', () => {
    const action = savingTransferRecipientAction('mockRecipient', '1');
    expect(action.type).toEqual(
      BC.savedTransferRecipientAndAmount,
    );
    expect(action.value.toAddress).toEqual('mockRecipient');
    expect(action.value.amount).toEqual('1');
  });

  it('should return show modal action', () => {
    const action = showModalAction();
    expect(action.type).toEqual(BC.showModal);
  });

  it('should return store amounts actions', () => {
    const action = storeAmountsAction(
      [1],
      ['mockToAddress'],
      ['mockFromAddress'],
    );
    expect(action.type).toEqual(BC.storeTransactionsAmounts);
    expect(action.value.toAddresses).toEqual(['mockToAddress']);
    expect(action.value.fromAddresses).toEqual(['mockFromAddress']);
    expect(action.value.amount).toEqual([1]);
  });
});
