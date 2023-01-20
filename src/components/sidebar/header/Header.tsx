import React from 'react'
import style from './Header.module.scss'

type Headerprops = {

}


const Header = ({ }: Headerprops) => {
    return (
        <div className={style.container}>
            <h3>Chatac</h3>
            <div className={style.listAction} tabIndex={0} >
                <img src="https://img.icons8.com/nolan/64/sorting-options.png" height={'40px'} />
                <div className={style.dropdown} >
                    <button>Profile</button>
                    <button>Setting</button>
                    

                </div>
            </div>




        </div>
    )
}

export default Header



{/* <div tabIndex={0} className={style.MainContainer}>
                <img src="https://img.icons8.com/nolan/64/sorting-options.png" height={'40px'} tabIndex={0} role="img" alt='setting' />
                <div className={style.csaj} >
                    <div className={style.HiddenUntilHover} tabIndex={0} >
                        <button>hello</button>
                    </div>
                    <div className={style.HiddenUntilHover} tabIndex={0}>
                        <h4>Logout</h4>
                    </div>
                </div>
            </div> */}