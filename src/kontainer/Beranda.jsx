import React, {Component} from 'react';

// Video #6
import YutupKomponen from '../komponen/YutupKomponen';

class Beranda extends Component {
    render(){
        return(
            <div>
                <p>Yutup Komponen</p>
                <hr/>
                <YutupKomponen waktu="8.02" judul="Judul ke-1" deskripsi="Deskripsi judul ke-1"/>
                <YutupKomponen waktu="7.12" judul="Judul ke-2" deskripsi="Deskripsi judul ke-2"/>
                <YutupKomponen waktu="4.42" judul="Judul ke-3" deskripsi="Deskripsi judul ke-3"/>
                <YutupKomponen waktu="2.12" judul="Judul ke-4" deskripsi="Deskripsi judul ke-4"/>
                <YutupKomponen/>
            </div>
        ) 
    }
}
export default Beranda;
// end-Video #6