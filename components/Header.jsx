import React, { useContext } from 'react'

import Link from 'next/link';

const categories = [{name: 'React', slug: 'react'}, { name: 'web Dev', slug: 'wed-dev'}]

const Header = () => {
  return (
    <div className='container mx-auto px-10 mb-8'>
        <div className='border-b w-full inline-block border-blue-400 py-8'>
            <div className='md:float-left block'>
                <a href="/">
                    <span className='cursor-pointer font-bold text-4xl'>
                        GenZTech
                    </span>
                </a>
            </div>
            <div className='hidden md:float-left md:contents'>
                {categories.map((category) => (
                    <a key={category.slug} href={'/category/${category.slug}'}>
                        <span className='md:float-right mt-2 align-middle ml-4 font-semibold cursor-pointer'>
                            {category.name}
                        </span>
                    </a>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Header