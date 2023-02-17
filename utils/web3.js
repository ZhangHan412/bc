import Web3 from "web3";

class Web3Helper {
    constructor() {
        this.init();
    }

    async init() {
        // 检查是否是新的MetaMask 或 DApp浏览器
        let web3Provider;
        if (window.ethereum) {
            web3Provider = window.ethereum;
        } else if (window.web3) {   // 老版 MetaMask Legacy dapp browsers...
            web3Provider = window.web3.currentProvider;
        } else {
            web3Provider = new Web3.providers.HttpProvider('http://localhost:8545');
        }
        this.web3 = new Web3(web3Provider);
    }

    isMetaMaskInstalled() {
        return Boolean(window.ethereum && window.ethereum.isMetaMask);
    }

    async connect() {
        if (!this.isMetaMaskInstalled()) {
            // onCheckInstalled(false);
            console.log("onCheckInstalled:false");
            return;
        }
        // onCheckInstalled(true);
        console.log("onCheckInstalled:true");

        await window.ethereum.request({ method: 'eth_requestAccounts' }).then(
            async (accounts) => {
                this.ethAccount = accounts[0];
                console.log("this.ethAccount", this.ethAccount)

                // onConnectSuccess();
                console.log("onConnectSuccess");
                // const value = this.GetRequest(
                console.log('success')
                // colyseusHelper.signout(this.ethAccount).then(() => {
                //     console.log('success112')
                // });
                // await colyseusHelper.signout(this.ethAccount, 'pk').then(() => {
                //     console.log('success112')
                // });
            }
        )
    }

    isEthAccount() {
        return this.ethAccount != null;
    }

    disconnectAccount() {
        console.log('disconnect');
    }
}

const web3Helper = new Web3Helper()

export default web3Helper;
