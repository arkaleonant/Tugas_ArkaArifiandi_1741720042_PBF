import React, {Component} from "react";
import './BlogPost.css';
import Post from "../../component/BlogPost/Post";

class BlogPost extends Component{
    state = { 
        listArtikel: [],
        insertArtikel:{
            userId: 1,
            id: 1,
            title: "",
            body: ""
        }
    }

   
    ambilDataDariServerAPI = () => {
        fetch('http://localhost:3001/posts?_sort=id&_order=desc')
          .then(Response => Response.json())
          .then(jsonHasilAmbilDariAPI => {
            this.setState({
                listArtikel: jsonHasilAmbilDariAPI
            })
        })
    }

    componentDidMount(){
        this.ambilDataDariServerAPI()
    }

    handleHapusArtikel = (data) => {
        fetch(`http://localhost:3001/posts/${data}` , {method: 'DELETE'})
        .then(res => {
            this.ambilDataDariServerAPI()
        })
    }

    handleTambahArtikel = (event) => {
        let formInsertArtikel = {...this.state.insertArtikel};
        let timestamp = new Date().getTime();
        formInsertArtikel['id'] = timestamp;
        formInsertArtikel[event.target.name] = event.target.value;
        this.setState({
            insertArtikel: formInsertArtikel
        });
    }

    handleTombolSimpan = () => {
        fetch('http://localhost:3001/posts',{
            method: 'post',
            headers: {
                'Accept' : 'application.json',
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(this.state.insertArtikel)
        })
        .then((Response) =>{
            this.ambilDataDariServerAPI();
        });
    }

    render(){
        return(
           <div className="post-artikel">
               <div className="form pb-2 border-bottom">
                    <div className="form-group-row">
                        <label htmlFor="title" className="col-sm-2 col-form-label">Judul</label>
                             <div className="col-sm-10">
                                 <input className="form-control" id="title" name="title" rows="3" onChange={this.handleTambahArtikel}></input>
                             </div>
                    </div>
                    <div className="form-group-row">
                        <label htmlFor="title" className="col-sm-2 col-form-label">Isi</label>
                             <div className="col-sm-10">
                                 <textarea className="form-control" id="body" name="body" rows="3" onChange={this.handleTambahArtikel}></textarea>
                             </div>
                    </div>
                     <br></br>
                        <button type="submit" className="btn btn-primary" onClick={this.handleTombolSimpan}>Simpan</button>
                  </div>
                <h2>Daftar artikel</h2>
                {
                    this.state.listArtikel.map(artikel => {
                        return <Post key={artikel.id} judul={artikel.title} isi={artikel.body} idArtikel={artikel.id} hapusArtikel={this.handleHapusArtikel}/>
                    })
                }
        </div>


        )
    }
}

export default BlogPost;