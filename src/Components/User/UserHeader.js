import React from 'react'
import UserHeaderNav from './UserHeaderNav'

import styles from './UserHeader.module.css'
import { useLocation } from 'react-router-dom'

const UserHeader = () => {
    const [title, setTitle] = React.useState('')
    const location = useLocation()

    React.useEffect(() => {
        if (location.pathname === '/minhaConta/estatisticas') return setTitle('Estatisticas')
        if (location.pathname === '/minhaConta/postar') return setTitle('Adicionar Foto')
        if (location.pathname === '/minhaConta') return setTitle('Minha Conta')

    }, [location])

    return (
        <header className={styles.header} >
            <h1 className="title" >{title}</h1>
            <UserHeaderNav />

        </header>
    )
}

export default UserHeader
