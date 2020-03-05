import React, {Component} from "react";
import './mhsStatefull.css';
import mhsStateless from "../../component/Mhs/mhsStateless";

class mhsStatefull extends Component{
    state = { 
        listData: [],
        insertData:{
            userId:1,
            id: 1,
            nim:"",
            nama: "",
            alamat: "",
            hp: "",
            angkatan: "",
            status: ""
        }
    }

   
    ambilDataDariServerAPI = () => {
        fetch('http://localhost:3001/mahasiswa')
          .then(Response => Response.json())
          .then(jsonHasilAmbilDariAPI => {
            this.setState({
                listDatal: jsonHasilAmbilDariAPI
            })
        })
    }

    componentDidMount(){
        this.ambilDataDariServerAPI()
    }

    handleHapusData = (data) => {
        fetch(`http://localhost:3001/mahasiswa/${data}` , {method: 'DELETE'})
        .then(res => {
            this.ambilDataDariServerAPI()
        })
    }

    handleTambahData = (event) => {
        let formInsertData = {...this.state.insertData};
        let timestamp = new Date().getTime();
        formInsertData['id'] = timestamp;
        formInsertData[event.target.name] = event.target.value;
        this.setState({
            insertData: formInsertData
        });
    }

    handleTombolSimpan = () => {
        fetch('http://localhost:3001/mahasiswa',{
            method: 'post',
            headers: {
                'Accept' : 'application.json',
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(this.state.insertData)
        })
        .then((Response) =>{
            this.ambilDataDariServerAPI();
        });
    }

    render(){
        return(
           <div className="post-data">
               <div className="form pb-2 border-bottom">
               <div className="form-group-row">
                        <label htmlFor="title" className="col-sm-2 col-form-label">NIM</label>
                             <div className="col-sm-10">
                                 <input className="form-control" id="nim" name="nim" rows="3" onChange={this.handleTambahData}></input>
                             </div>
                     </div>
                     <div className="form-group-row">
                        <label htmlFor="title" className="col-sm-2 col-form-label">Nama</label>
                             <div className="col-sm-10">
                                 <input className="form-control" id="nama" name="nama" rows="3" onChange={this.handleTambahData}></input>
                             </div>
                     </div>
                     <div className="form-group-row">
                        <label htmlFor="title" className="col-sm-2 col-form-label">Alamat</label>
                             <div className="col-sm-10">
                                 <input className="form-control" id="alamat" name="alamat" rows="3" onChange={this.handleTambahData}></input>
                             </div>
                     </div>
                     <div className="form-group-row">
                        <label htmlFor="title" className="col-sm-2 col-form-label">No.HP</label>
                             <div className="col-sm-10">
                                 <input className="form-control" id="hp" name="hp" rows="3" onChange={this.handleTambahData}></input>
                             </div>
                     </div>
                     <div className="form-group-row">
                        <label htmlFor="title" className="col-sm-2 col-form-label">Angkatan</label>
                             <div className="col-sm-10">
                                 <input className="form-control" id="angkatan" name="angkatan" rows="3" onChange={this.handleTambahData}></input>
                             </div>
                     </div>
                     <div className="form-group-row">
                        <label htmlFor="title" className="col-sm-2 col-form-label">Status</label>
                             <div className="col-sm-10">
                                 <input className="form-control" id="status" name="status" rows="3" onChange={this.handleTambahData}></input>
                             </div>
                     </div>
                     <br></br>
                        <button type="submit" className="btn btn-primary" onClick={this.handleTombolSimpan}>Simpan</button>
                  </div>
                <h2>Data Mahasiswa</h2>
                {
                    this.state.listData.map(Data => {
                        return <mhsStateless key={Data.id} nim={Data.nim} nama={Data.nama} 
                                        alamat={Data.alamat} hp={Data.hp} angkatan={Data.angkatan} status={Data.status}
                                        idData={Data.id} hapusData={this.handleHapusData}/>
                    })
                }
        </div>


        )
    }
}

export default mhsStatefull;