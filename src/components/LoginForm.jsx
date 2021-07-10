import { useState } from "react";
import axios from "axios";

const LoginForm = () => {
        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');
        const [error, setError] = useState('');


        const handleSubmit = async (e) => {
            e.preventDefault();

            const authObject = {'Project-ID': "0b3835fc-56c0-4a3b-8f0b-8c503c7f6574",'User-Name': username, 'User-Secret':password};

            try {
                await axios.get('https://api.chatengine.io/chats',{headers: authObject});
                localStorage.setItem('username',username);
                localStorage.setItem('password',password);

                window.location.reload();
                setError('');
            } catch (error) {
                setError('Invalid username or password');
            }

        }


        return (

            <div className="wrapper">
                <div className="form">
                    <h1 className="title">Messenger JK</h1>
                    <p style={{color:'white',padding:'10px',position:'absolute', top:'0', left:'0'}}>For default guest <br /> login: user <br /> password: user </p>
                    <form action="" onSubmit={handleSubmit}>
                        <input type="text" value={username} onChange={(e)=> setUsername(e.target.value)} className="input" placeholder="Username" required />
                        <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} className="input" placeholder="Password" required />
                        <div align="center">
                            <button type="submit" className="button">
                                <span>Log In</span>
                            </button>
                        </div>
                        <h2 className="error">{error}</h2>
                    </form>
                </div>
            </div>

        );


}


export default LoginForm;