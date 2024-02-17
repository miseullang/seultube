import React from 'react'
import { CiYoutube } from "react-icons/ci";

const Logo = () => {
  return (
    <div>
        <h1 className="headerLogo">
            <a href='/'>
                <em aria-hidden='true'><CiYoutube /></em>
                <span>seultube</span>
            </a>
        </h1>

    </div>
  )
}

export default Logo
