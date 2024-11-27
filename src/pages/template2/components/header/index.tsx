import './header.css'
import '../../../global.css'
import logo from '@/assets/img/logo.png'

export function Header() {


    return (
        <>
                <header>
                    <div className='header-container'>

                        <img className='header-container-logo' src={logo} />

                    

                    </div>

                </header>
        </>
    )
}
