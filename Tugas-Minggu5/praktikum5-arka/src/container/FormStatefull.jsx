import React from 'react';
import './FormStatefull.css';

class FormStatefull extends React.Component{
    render(){
        return (
            <div>
                <p className="title"> Form Login</p>
                <table className='form'>
                    <thead>
                        <p className='h1'> Tugas Pertemuan Ketiga</p>
                    </thead>
                        <td>
                        <form>
                            <label> Username </label>
                            <input type="text" placeholder="Input Username" required /> <br/><br/>
                            <label> Password </label>
                            <input type="password" placeholder="Input Password" required /> <br/>
                            <button>Go!</button><br/>
                            <input type="checkbox" name="" id=""/><label className='remember'>Remember Me</label><br/><br/><br/>
                            <button className='buttonCancel'>Cancel</button>
                        </form>
                        </td>
                </table>
            </div>
        );
    }
}

export default FormStatefull;