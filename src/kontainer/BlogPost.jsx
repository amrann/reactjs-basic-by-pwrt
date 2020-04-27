import React, {Component, Fragment} from 'react';

// // Video #10
// import './BlogPost.css';
// import Post from '../komponen/Post'
// class BlogPost extends Component{    
//     render(){
//         return(
//             <Fragment>
//                 <p className="section-title">Blog Post</p>
//                 <Post title="title" desc="deskripsi"/>
//             </Fragment>
//         )
//     }
// }
// export default BlogPost;
// // end-Video #10

// Video #11
import './BlogPost.css';
import Post from '../komponen/Post';
import axios from 'axios';
class BlogPost extends Component{    
    state = {
        postingan: []
    }

    componentDidMount(){
        // Memanggil API dengan menggunakan fetch
        // fetch('http://jsonplaceholder.typicode.com/posts') // link yang digunakan merupakan link penyedia API dummy
        // .then(response => response.json())
        // .then(json => {
        //     this.setState({
        //         postingan: json
        //     })
        // })

        // Memanggil API dengan menggunakan axios
        // axios.get('http://jsonplaceholder.typicode.com/posts')
        // .then((hasil)=> {
        //     // console.log(hasil);
        //     this.setState({
        //         postingan: hasil.data
        //     })
        // })

        /*
        Menggunakan json-server (https://github.com/typicode/json-server) utk melihat perubahan post/put/delete
        Cara penggunaannya:
        - install terlebih dahulu json server : npm install -g json-server
        - buatkan file json (project ini filenya databes.json)
        - jalankan server tersebut pada terminal baru : json-server --watch databes.json --port 3004 (perlu menggunakan port baru karena port 3000 sdh digunakan untk menjalankan react-nya
        */
        axios.get('http://localhost:3004/posts') // link yg digunakan merupakan link json-server
        .then((hasil)=> {
            // console.log(hasil);
            this.setState({
                postingan: hasil.data
            })
        })

    }
    
    render(){
        return(
            <Fragment>
                <p className="section-title">Blog Post</p>
                {
                    // map disni berfungsi sebagai looping
                    this.state.postingan.map(postingan => {
                        return <Post key={postingan.id} title={postingan.title} desc={postingan.body}/>
                        //perlu utk memberikan 'key' tidak terjadi warning pada console browser kita
                    })
                }
            </Fragment>
        )
    }
}
export default BlogPost;
// end-Video #11