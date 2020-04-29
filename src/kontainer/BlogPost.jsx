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
        postingan: [],
        formBlogPost: {
            id: 1,
            title: '',
            body: '',
            userId: 1
        },
        // state ini berfungsi utk membedakan apa yang dipanggil merupakan button simpan utk 'post' atau
        // button edit untuk 'put'
        isEdit: false
    }

    // componentDidMount(){
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

        // Video ke-12
        /*
        Menggunakan json-server (https://github.com/typicode/json-server) utk melihat perubahan post/put/delete
        Cara penggunaannya:
        - install terlebih dahulu json server : npm install -g json-server
        - buatkan file json (project ini filenya databes.json)
        - jalankan server tersebut pada terminal baru : json-server --watch databes.json --port 3004 (perlu menggunakan port baru karena port 3000 sdh digunakan untk menjalankan react-nya
        */
        // axios.get('http://localhost:3004/posts') // link yg digunakan merupakan link json-server
        // .then((hasil)=> {
        //     // console.log(hasil);
        //     this.setState({
        //         postingan: hasil.data
        //     })
        // })
        // end-Video ke-12

    // }
    
    // render(){
    //     return(
    //         <Fragment>
    //             <p className="section-title">Blog Post</p>
    //             {
    //                 // map disni berfungsi sebagai looping
    //                 this.state.postingan.map(postingan => {
    //                     return <Post key={postingan.id} title={postingan.title} desc={postingan.body}/>
    //                     //perlu utk memberikan 'key' tidak terjadi warning pada console browser kita
    //                 })
    //             }
    //         </Fragment>
    //     )
    // }

    // Video #13
    panggilGetPostAPI = () => {
        axios.get('http://localhost:3004/inidataposts?_sort=id&_order=desc')
        .then((hasil)=> {
            // console.log(hasil);
            this.setState({
                postingan: hasil.data
            })
        })
    }

    postDataKeAPI = () => {
        axios.post('http://localhost:3004/inidataposts', this.state.formBlogPost)
        .then((hasil) => {
            console.log(hasil);
            this.panggilGetPostAPI();
            this.setState({
                // Untuk membersihkan inputan setelah submit
                formBlogPost: {
                    id: 1,
                    title: '',
                    body: '',
                    userId: 1
                }
            })
            
        }, (gagal) => {
            console.log('gagal: ', gagal);
        })
    }

    putDataKeAPI = () => {
        axios.put(`http://localhost:3004/inidataposts/${this.state.formBlogPost.id}`, this.state.formBlogPost) // link yg digunakan merupakan link json-server
        .then((hasil)=> {
            // console.log(hasil);
            this.panggilGetPostAPI()
            this.setState({
                // Untuk membersihkan inputan setelah submit
                formBlogPost: {
                    id: 1,
                    title: '',
                    body: '',
                    userId: 1
                },
                isEdit: false
            })
        })
    }
    
    handleClickHapus = (data) => {
        // console.log(data)
        axios.delete(`http://localhost:3004/inidataposts/${data}`) // link yg digunakan merupakan link json-server
        .then((hasil)=> {
            // console.log(hasil);
            this.panggilGetPostAPI()
        })

    }

    handleClickEdit = (data) => {
        // console.log(data)
        this.setState({
            formBlogPost: data,
            isEdit: true
        })
        
    }

    // Method ini berfungsi disaat form terjadi perubahan atau mempunyai inputan, sehingga dengan cara seperti itulah kita bisa mendapatkan value pada form-nya
    handlePerubahanForm = (event) => {
        // console.log('form change', event)
        let formBlogPostNew = {...this.state.formBlogPost} // melukakan duplicate nilai ke formBlogPostNew
        let timestamp = new Date().getTime();
        // Jika isEdit bernilai 'false' maka dia memanggil formBlogPostNew['id'] = timestamp
        if(!this.state.isEdit){
            // Kondisi ini untk menghindari update 'id' ketika terjadi perubahan input pada kondisi edit
            formBlogPostNew['id'] = timestamp // 'id' diisi dengan nilai timestamp
        }
        formBlogPostNew[event.target.name] = event.target.value
        // [event.target.name] -> 'name' diambil berdasarkan pada form
        this.setState({
            formBlogPost: formBlogPostNew
        })
    }

    handleButtonSimpan = () => {
        // console.log(this.state.formBlogPost);
        // Jika isEdit bernilai 'true' maka dia memanggil putDataKeAPI()
        if(this.state.isEdit){
            this.putDataKeAPI();
        }else{
            this.postDataKeAPI();
        }
    }

    componentDidMount(){
        this.panggilGetPostAPI();
    }

    render(){
        return(
            <Fragment>
                <p className="section-title">Blog Post</p>
                {/* Video #14 */}
                <div className="form-add-post">
                    <label htmlFor="title">Title</label>
                    <input type="text" value={this.state.formBlogPost.title} name="title" placeholder="Tambah judul" onChange={this.handlePerubahanForm}/>
                    <label htmlFor="body">Body content</label>
                    <textarea name="body" value={this.state.formBlogPost.body} id="body" cols="30" rows="10" placeholder="Tambah konten blog" onChange={this.handlePerubahanForm}></textarea>
                    <button className="btn-simpan" onClick={this.handleButtonSimpan}>Simpan</button>
                </div>
                {
                    // map disni berfungsi sebagai looping
                    this.state.postingan.map(postingan => {
                        return <Post key={postingan.id} dtitlebody={postingan} clickHapus={this.handleClickHapus} clickEdit={this.handleClickEdit}/>
                        //perlu utk memberikan 'key' agar tidak terjadi warning pada console browser kita
                    })
                }
            </Fragment>
        )
    }
    // Video #13
}
export default BlogPost;
// end-Video #11