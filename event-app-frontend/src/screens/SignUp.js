import React, { useState } from 'react'
import { useAuth } from '../context/auth'

export const SignUp = (props) => {
    const [defaultModal, setdefaultModal] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [type, setType] = useState("");
    const [ticket, setTicket] = useState("");
    const [file, setFile] = useState(null);
    const [fileUrl, setFileUrl] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isError, setIsError] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { setAuthTokens } = useAuth();
    const referer = props.location.state.referer || '/';
    return (
        <div>
            
        </div>
    )
}
