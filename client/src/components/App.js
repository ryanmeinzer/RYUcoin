import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import {Button} from 'react-bootstrap'

const redisUrl = process.env.REDIS_URL
const amazonId = 'amazonaws.com:'

const index = redisUrl.indexOf(amazonId)
const length = amazonId.length

const amazonIdCorrected = parseInt(redisUrl.slice(index + length)) + 1
const redisUrlCorrected = redisUrl.slice(0, index) + amazonIdCorrected

console.log('redisUrlCorrected', redisUrlCorrected)

class App extends Component {
    state = { walletInfo: { } }

    componentDidMount() {
        fetch(`${document.location.origin}/api/wallet-info`)
            .then(response => response.json())
            .then(json => this.setState({ walletInfo: json}))
    }

    render() {
        const { address, balance } = this.state.walletInfo

        return (
            <div className="App">
                <img className='logo' src={ logo }></img>
                <br />
                <div>Welcome to the blockchain...</div>
                <br />
                <div><Link to='/blocks'>Blocks</Link></div>
                {/* <div><Link to='/conduct-transaction'>Conduct a Transaction</Link></div> */}
                <div><Link to='/transaction-pool'>Transaction Pool</Link></div>
                <br />
                {/* <div className="WalletInfo">
                    <div>Address: {address}</div>
                    <div>Balance: { balance }</div>
                </div>
                <br /> */}
                <Button
                    bsStyle="danger"
                    onClick={
                        (e) => {
                        e.preventDefault()
                        window.location.href='https://github.com/ryanmeinzer/RYUcoin-peer'
                        }
                    }
                >
                    Join to get 1,000 RYU
                </Button>
                {/* <div className='join'>
                    <a href="https://github.com/ryanmeinzer/RYUcoin-peer" target="_blank">Join</a>
                </div> */}
            </div>
        )
    }
}

export default App