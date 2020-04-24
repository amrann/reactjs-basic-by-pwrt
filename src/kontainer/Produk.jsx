import React, {Component, Fragment} from 'react';
// Video #7
import './Produk.css';
import CardProduk from './CardProduk';

class Produk extends Component{
    state = {
        // State ini berfungsi utk merender nilai yang berubah-ubah
        // kata 'state' merupakan bawaan dari react, jadi jangan diubah
        pesan : 4      
    }

    hendelCounterChangeParent = (nilaiBaru) => {
        // function ini berfungsi untuk menghubungkan nilai dari child ke parent
        this.setState({
            pesan: nilaiBaru
        })
    }

    render(){
        return(
            <Fragment>
                <div className="header">
                    <div className="logo">
                        <img src="https://etanee.id/img/content/img_logo_etanee_white.svg"/>
                    </div>
                    <div className="troley">
                        <img src="https://etanee.id/img/icon/ic_cart_white.svg" />
                        <div className="count">{this.state.pesan}</div>
                    </div>
                </div>
                <CardProduk onKaunterChange = {(nilai)=>this.hendelCounterChangeParent(nilai)} />
            </Fragment>
        )
    }
}

export default Produk;
// end-Video #7