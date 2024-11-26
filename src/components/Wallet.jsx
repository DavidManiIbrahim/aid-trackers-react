import { NetworkId, WalletId, WalletManager } from '@txnlab/use-wallet'

// import React from 'react'

const Wallet = () => {

    const walletManager = new WalletManager({
        wallets: [
          WalletId.DEFLY,
          WalletId.PERA,
          WalletId.EXODUS,
          WalletId.KIBISIS,
          {
            id: WalletId.WALLETCONNECT,
            options: { projectId: '<YOUR_PROJECT_ID>' }
          },
          {
            id: WalletId.MAGIC,
            options: { apiKey: '<YOUR_API_KEY>' }
          },
          {
            id: WalletId.LUTE,
            options: { siteName: 'Aid Trackers' }
          }
        ],
        network: NetworkId.TESTNET
      })

  return (
    <div>WalletManager</div>
  )
}

export default Wallet

