import React from 'react'

import { UserContext } from '../../Context/userContext'
import { NavLink } from 'react-router-dom'

import {ReactComponent as MinhasFotos} from '../../Assets/feed.svg'
import {ReactComponent as Estatisticas} from '../../Assets/estatisticas.svg'
import {ReactComponent as Adicionar} from '../../Assets/adicionar.svg'
import {ReactComponent as Sair} from '../../Assets/sair.svg'

import styles from './UserHeaderNav.module.css'

const UserHeaderNav = () => {
    const [mobile, setMobile] = React.useState(null)
    const { userLogout } = React.useContext(UserContext)

    const { matches } = window.matchMedia('(max-width: 40rem)')

    return (
        <nav className={styles.nav} >
            <NavLink to="/minhaConta" end activeClassName={styles.active}>
                <MinhasFotos />
                {mobile && 'Minhas Fotos' }
            </NavLink>

            <NavLink to="estatisticas" activeClassName={styles.active}>
                <Estatisticas />
                {mobile && 'Estatísticas'}
            </NavLink>

            <NavLink to="postar" activeClassName={styles.active}>
                <Adicionar />
                {mobile && 'Adicionar Foto'}
            </NavLink>

            <button onClick={userLogout} activeClassName={styles.active}>
                <Sair />
                {mobile && 'Sair'}
            </button>
        </nav>
    )
}

export default UserHeaderNav
