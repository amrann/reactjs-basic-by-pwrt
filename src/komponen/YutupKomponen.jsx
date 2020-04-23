import React from 'react';
// Video #6
import './YutupKomponen.css';
import gambar from '../assets/city_park_kit8net_dribbble.png'

// contoh component static
// const YutupKomponen = () => { 
//     return (
//         <div className="youtube-wrapper">
//             <div className="img-thumb">
//                 <img src={gambar} alt={gambar} />
//                 <p className="time">7.12</p>
//             </div>
//             <p className="title">title here</p>
//             <p className="desc">desc here</p>
//         </div>
//     )
// }

// contoh component dinamis
const YutupKomponen = (props) => { 
    return (
        <div className="youtube-wrapper">
            <div className="img-thumb">
                <img src={gambar} alt="" />
                <p className="time">{props.waktu}</p>
            </div>
            <p className="title">{props.judul}</p>
            <p className="desc">{props.deskripsi}</p>
        </div>
    )
}
// Merupakan props default jika user tidak berikan nilai pada props yang ada
YutupKomponen.defaultProps = {
    waktu: '00.00',
    judul: 'Judul default',
    deskripsi: 'Deskripsi judul default'
}

export default YutupKomponen;
// end-Video #6