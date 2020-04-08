import React from "react";

const mhsStateless = (props) => {
    return(
        <div className="post-data">
            <div className="data">
                <div className="gambar-data">
                    <img src="http://placeimg.com/80/80/tech" alt="gambar tumbnail data" />
                </div>
                <div className="konten-data">
                    <div className="nama-data">{props.nama}</div>
                    <p className="nim-data">{props.nim}</p>
                    <p className="alamat-data">{props.alamat}</p>
                    <p className="hp-data">{props.hp}</p>
                    <p className="angkatan-data">{props.angkatan}</p>
                    <p className="status-data">{props.status}</p>

                    <button className="btn btn-sm btn-warning" onClick={() => props.hapusData(props.idData)}>Hapus</button>
                 </div>
            </div>
        </div>
    )
}

export default mhsStateless;