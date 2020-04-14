import React, { useState, useEffect } from 'react';
import logoImg from '../../assets/logo.svg';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import './styles.css';
import api from './../../services/api';

export default function Profile() {
    const ongName = localStorage.getItem('ongName');
    const ongId = localStorage.getItem('ongId');
    const [incidents, setIncidents] = useState([]);
    const history = useHistory();

    useEffect(() => {
        api.get(`/incident/ong`, {
            headers: { authorization: ongId }
        }).then(res => {
            setIncidents(res.data);
        })
    }, [ongId]);

    async function handleDeleteIncident(id) {
        try {
            await api.delete(`/incident/${id}`, {
                headers: {
                    authorization: ongId
                }
            });

            setIncidents(incidents.filter(incident => incident.id !== id));
        } catch (error) {
            alert(error.message);
        }

    }

    function handleLogout() {
        try {
            localStorage.clear();
            history.push('/');
            console.log('deslogando..')
        } catch (error) {
            alert(error.message);
        }
    }



    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be the hero" />
                <span>Bem vinda, {ongName}</span>
                <Link className="button" to="/incidents/news">Cadastra novo caso</Link>
                <button type="button"> <FiPower size={18} color="#e02041" onClick={handleLogout} /></button>
            </header>
            <h1>Casos cadastrados</h1>
            <ul>
                {
                    incidents.map(incident => (
                        <li key={incident.id}>
                            <strong>Caso:</strong>
                            <p>{incident.title}</p>
                            <strong>Descrição:</strong>
                            <p>{incident.description}</p>
                            <strong>Valor:</strong>
                            <p>{incident.value ? Intl.NumberFormat('pt-BR', { style: "currency", currency: "BRL" }).format(incident.value) : 'GRATUITO'}</p>

                            <button type="button"> <FiTrash2 size={20} color="#a8a8b3"
                                onClick={() => handleDeleteIncident(incident.id)} /></button>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}
