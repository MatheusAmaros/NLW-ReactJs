import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import { Button } from '../components/Button'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth';
import { FormEvent, useState } from 'react';
import { database } from '../services/firebase';


//import { useContext } from 'react'
//import { AuthContext } from '../context/AuthContext';


export function NewRoom() {
    const { user } = useAuth();
    const navigate = useNavigate();
    const[newRoom, setNewRoom] = useState('');

    async function handleCreateRoom(event: FormEvent) {
        event.preventDefault();

        if (newRoom.trim() == ''){
            return;
        }

        const roomRef = database.ref('rooms');

        const firebaseRoom = await roomRef.push({
            title: newRoom,
            authorId: user?.id

        });
        
        navigate('/room/'+firebaseRoom.key);
        //history.push(firebaseRoom);
    }

    return(
        <div id='page-auth'>
            <aside>
                <img src={illustrationImg} alt="perguntas e respostas" />
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tire as dúvidas em tempo real</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="letmeask" />
                   
                    <h2>Criar uma nova sala</h2>
                    <h2>{user?.name}</h2>
                    <form  onSubmit={handleCreateRoom}>
                        <input 
                            type="text" placeholder="Nome da sala" 
                            onChange={event => setNewRoom(event.target.value)}
                            value={newRoom}
                        />
                        <Button type="submit">
                            criar na sala
                        </Button>
                    </form>
                    <p>quer entrar em uma sala existente <Link to="/">clique aqui</Link></p>
                </div>
            </main>
        </div>
    )
}