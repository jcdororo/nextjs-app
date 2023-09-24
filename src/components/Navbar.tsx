// 서버 컴포넌트에서는 useState와 같은 클라이언트 훅스를 사용할 수 없으니
// 사용하고 싶을 때 'use client'를 작성한다.
'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import NavItem from './NavItem';

const Navbar = () => {

  const [menu, setMenu] = useState(false);
  
  const handleMenu = () => {
    setMenu(!menu);
  }

  return (
    <nav className='relative z-10 w-full bg-orange-500 text-white'>
      <div className='flex items-center justify-between mx-5 sm:mx-10 lg:mx-20'>

        <div className='flex items-center text-2xl h-14'>
          <Link href="/">Logo</Link>
        </div>

        <div className='text-2xl sm:hidden'>
          {menu === false ? 
          <button onClick={handleMenu}>+</button> : 
          <button onClick={handleMenu}>-</button>}
        </div>


        <div className='hidden sm:block'>
            <NavItem />
        </div>

      </div>

      <div className='block sm:hidden'>
        {(menu === false) ? null : <NavItem mobile />}
      </div>

    </nav>
  )
}

export default Navbar