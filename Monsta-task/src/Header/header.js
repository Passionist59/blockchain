import React from 'react';
import { Container, Navbar, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/style.css';
import { useEthers, ChainId } from "@usedapp/core";
var btntext;

function Header() {

    const { activateBrowserWallet, account, chainId } = useEthers();

    const connectWallet = () => {
        // activateBrowserWallet();

        window.monsta
            .request({ method: 'eth_requestAccounts' })
            .then(() => {
                console.log("disconnect");
                
            })
            .catch((err) => {
                if (err.code === 4001) {
                    // EIP-1193 userRejectedRequest error
                    // If this happens, the user rejected the connection request.
                    console.log('Please connect to Monsta.');
                } else {
                    console.error(err);
                }
            });
    }

    return (
        <Navbar expand="xxl" className='white'>
            <Container className="justify-content-end">
                <Navbar className='nav-item nav-link text-white'>
                    <Button className='Nab_button' variant="primary" size="lg" onClick={connectWallet} >CONNECT WALLET</Button>
                </Navbar>

            </Container>
        </Navbar>
    )
}

export default Header;
