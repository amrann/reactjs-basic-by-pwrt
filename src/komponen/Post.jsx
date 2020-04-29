import React from 'react';
// Video #10
// const Post = (props) => { 
//     return (
//         <div className="post">
//             <div className="img-thumb">
//                 <img src="http://placeimg.com/200/150/tech"/>
//             </div>
//             <div className="content">
//                 <p className="title">Dummy title</p>
//                 <p className="desc">Dummy description</p>
//             </div>
//         </div>
//     )
// }
// export default Post;
// end-Video #10

// Video #11
// const Post = (props) => { 
//     return (
//         <div className="post">
//             <div className="img-thumb">
//                 <img src="http://placeimg.com/200/150/tech"/>
//             </div>
//             <div className="content">
//                 <p className="title">{props.title}</p>
//                 <p className="desc">{props.desc}</p>
//             </div>
//         </div>
//     )
// }
// export default Post;
// end-Video #11

// Video #13
const Post = (props) => { 
    return (
        <div className="post">
            <div className="img-thumb">
                <img src="http://placeimg.com/200/150/tech"/>
            </div>
            <div className="content">
                <p className="title">{props.dtitlebody.title}</p>
                <p className="desc">{props.dtitlebody.body}</p>
                <button className="bEdit" onClick={()=>props.clickEdit(props.dtitlebody)}>Edit</button>
                {/* data yang ingin diperlukan bukan cuman 'id' maka dari itu param yg digunakan adalah props.dtitlebody */}
                <button className="bHapus" onClick={()=>props.clickHapus(props.dtitlebody.id)}>Hapus</button>
            </div>
        </div>
    )
}
export default Post;
// end-Video #13