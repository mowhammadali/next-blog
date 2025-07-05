import React from 'react'
import Navigation from '@/ui/navigation/navigation'
import css from "@/components/shared/header/header.module.css";

const Header = () => {
    const isLoggedIn = false;

  return (
    <div className={css.container}>
        <div className={css["links-container"]}>
            <Navigation route='/'>خانه</Navigation>
            <Navigation route='/blogs'>بلاگ ها</Navigation>
        </div>
        <div className={css["links-container"]}>
            {
                isLoggedIn
                ?
                <Navigation route='/profile'>حساب کاربری</Navigation>
                :
                <Navigation route='/signup'>ورود</Navigation>
            }
        </div>
    </div>
  )
}

export default Header