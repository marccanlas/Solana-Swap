import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import images from '@/constants/images';
import ActiveLink from '@/modules/ActiveLink';

const Header = () => {
    const { theme, setTheme } = useTheme();
    const [darkMode, setDarkMode] = useState<boolean>(false);
    const [sidebarShow, setSidebarShow] = useState<boolean>(false)
    const [dropdownOpen, setDropdownOpen] = useState(false);

    useEffect(() => {
        console.log('theme', theme);
        if (theme === 'dark') {
            setDarkMode(true);
        } else {
            setDarkMode(false);
        }
    }, [theme]);

    return (
        <header className='lg:pl-8 md:pl-8 flex items-center md:justify-between justify-center flex-wrap z-40 w-full'>
            <div className='flex items-center space-x-10'>
                <Link href="/">
                    <div className="flex items-center justify-center z-50">
                        <Image src={images.Logo} alt="logo" className='w-12 sm:w-16' />
                    </div>
                </Link>

                <nav className='space-x-10 flex'>
                    <ActiveLink href='/'>Swap</ActiveLink>
                    <ActiveLink href='/about'>About US</ActiveLink>
                </nav>
            </div>

            <div className='md:flex hidden justify-between items-center gap-2'>
                <div className='bg-modal-back rounded-3xl px-4 py-2'>
                    <p className='font-bold text-sm swip-btn-color'>41 SWAIP</p>
                </div>

                <div className='bg-[#2F2A3C] pl-4 rounded-3xl'>
                    <div className='bg-modal-back rounded-3xl px-4 py-2'>
                        <p className='font-bold text-sm swip-btn-color'>wallet Button</p>
                    </div>
                </div>

                <div className='lg:flex hidden items-center gap-4 lg:mr-9 sm:mr-3 mr-4 md:mr-9'>
                    <div className='bg-modal-back rounded-2xl w-8 h-8 relative p-1 cursor-pointer dark:bg-main-hover-dark'
                        onClick={() => {
                            console.log("theme change ", theme);
                            if (theme === 'dark') {
                                return setTheme('light')
                            }
                            return setTheme('dark')
                        }}
                    >
                        <FontAwesomeIcon icon={theme === 'dark' ? faMoon : faSun} className={`fas ${theme === 'dark' ? 'fa-moon w-4' : 'fa-sun right-1 rotate-[360deg]  bg-main-hover-dark'} rounded-[50%] p-1 text-base absolute transform ease-out duration-1000 text-white`} />
                    </div>
                </div>

                <div className='block lg:hidden w-4 mr-1 ml-2 cursor-pointer'>
                    <FontAwesomeIcon
                        icon={sidebarShow ? faXmark : faBars}
                        onClick={() => setSidebarShow(!sidebarShow)}
                        className={`menu-ico text-main-hover-dark transition ease-in duration-300 ${sidebarShow ? 'spin' : ''}`}
                    />
                </div>
            </div>
        </header>
    )
}

export default Header
