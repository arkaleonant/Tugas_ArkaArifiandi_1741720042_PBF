import {domainPath} from "./Config";

const PostAPI = (path, data) => {
    const promise = new Promise((resolve, reject) => {
        fetch(`${domainPath}/${path}`,{
            method: 'post',                                     // method POST untuk input/insert data
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)      // kirimkan ke body request untuk data artikel yang akan ditambahkan (insert)
        })
            .then((result) => {
                resolve(result);                    // jika success menerima response dari server maka resolve response ke user
            }, (err) => {
                reject(err);                        // jika terjadi error dari server (server down, dll),
            })
    })
    return promise;
}
export default PostAPI;