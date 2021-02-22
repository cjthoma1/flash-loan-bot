// SPDX-License-Identifier: agpl-3.0
pragma solidity 0.6.12;

import '../interfaces/ILendingPool.sol';
import '../interfaces/ILendingPoolAddressesProvider.sol';
import '../interfaces/IERC20.sol';
import '../interfaces/IFlashLoanReceiver.sol';

import '../libraries/SafeMath.sol';
import '../libraries/SafeERC20.sol';


abstract contract FlashLoanReceiverBase is IFlashLoanReceiver {
  using SafeERC20 for IERC20;
  using SafeMath for uint256;

  ILendingPoolAddressesProvider public immutable ADDRESSES_PROVIDER;
  ILendingPool public immutable LENDING_POOL;

  constructor(ILendingPoolAddressesProvider provider) public {
    ADDRESSES_PROVIDER = provider;
    LENDING_POOL = ILendingPool(provider.getLendingPool());
  }
}