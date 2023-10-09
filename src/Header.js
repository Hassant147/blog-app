import React, {
    useState,
    useEffect
} from 'react';
import logo from '../src/Media/logo.png';
import si from '../src/Media/searchicon.png';

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (isOpen && !document.getElementById('nav-content').contains(event.target) && event.target.id !== 'nav-toggle') {
                setIsOpen(false);
            }
        };

        document.addEventListener('click', handleOutsideClick);

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, [isOpen]);

    return ( <
        div className = "bg-white shadow py-8 w-full" >
        <
        div className = "mx-auto w-4/5" >
        <
        div className = "flex flex-wrap flex-col md:flex-row justify-between space-y-6" >

        {
            /* Logo */ } <
        div className = "flex mx-auto w-full lg:w-auto mb-4 md:mb-0 justify-between" >
        <
        img className = "w-auto h-auto"
        src = {
            logo
        }
        alt = "Blog Logo" / >
        <
        button id = "nav-toggle"
        onClick = {
            () => setIsOpen(!isOpen)
        }
        className = "text-2xl md:block lg:hidden ml-4 hover:text-zinc-700 active:text-zinc-800 transition-colors duration-200" > ☰
        <
        /button> <
        /div>


        {
            /* Search Bar for Mobile */ } <
        div className = "flex items-center space-x-2 bg-zinc-100 rounded-2xl w-full h-10 pl-4 lg:hidden mt-4 mb-4" >
        <
        img className = "w-max h-max"
        src = {
            si
        }
        alt = "Search Icon" / >
        <
        input type = "text"
        placeholder = "Search"
        className = "Search text-neutral-700 text-xs font-normal pl-3 w-full bg-transparent outline-none font-metropolis" /
        >
        <
        /div>

        {
            /* Navigation + Search Bar for Desktop */ } <
        div className = "hidden lg:flex space-x-4 md:space-x-8 lg:space-x-12 items-center w-full justify-between" >
        <
        div id = "nav-content"
        className = "flex items-center space-x-4 md:space-x-8 lg:space-x-12" >
        <
        a href = "/home"
        className = "text-zinc-600 text-lg font-medium font-metropolis mb-2 md:mb-0" > Home < /a> <
        a href = "/posts"
        className = "text-zinc-600 text-lg font-medium font-metropolis" > Posts < /a> <
        a href = "/lifestyles"
        className = "text-zinc-600 text-lg font-medium font-metropolis" > Lifestyles < /a> <
        a href = "/technology"
        className = "text-zinc-600 text-lg font-medium font-metropolis" > Technology < /a> <
        a href = "/contact"
        className = "text-zinc-600 text-lg font-medium font-metropolis" > Contact < /a> <
        /div> {
            /* Search Bar for Desktop */ } <
        div className = "flex items-center space-x-2 bg-zinc-100 rounded-2xl w-full h-10 pl-4 my-auto" >
        <
        img className = "w-max h-max"
        src = {
            si
        }
        alt = "Search Icon" / >
        <
        input type = "text"
        placeholder = "Search"
        className = "Search text-neutral-700 text-xs font-normal pl-3 w-full bg-transparent outline-none font-metropolis" /
        >
        <
        /div> <
        /div> <
        /div>

        {
            /* Navigation Overlay */ } {
            isOpen && ( <
                div className = "absolute top-0 left-0 w-full h-screen z-50 bg-white opacity-95" >
                <
                div className = "pt-16 pb-8 w-full h-full flex flex-col justify-start items-center space-y-4" >
                <
                a href = "/home"
                onClick = {
                    () => setIsOpen(false)
                }
                className = "text-zinc-600 text-lg font-medium font-metropolis py-2 w-3/4 text-center border-b hover:bg-zinc-50" > Home < /a> <
                a href = "/posts"
                onClick = {
                    () => setIsOpen(false)
                }
                className = "text-zinc-600 text-lg font-medium font-metropolis py-2 w-3/4 text-center border-b hover:bg-zinc-50" > Posts < /a> <
                a href = "/lifestyles"
                onClick = {
                    () => setIsOpen(false)
                }
                className = "text-zinc-600 text-lg font-medium font-metropolis py-2 w-3/4 text-center border-b hover:bg-zinc-50" > Lifestyles < /a> <
                a href = "/technology"
                onClick = {
                    () => setIsOpen(false)
                }
                className = "text-zinc-600 text-lg font-medium font-metropolis py-2 w-3/4 text-center border-b hover:bg-zinc-50" > Technology < /a> <
                a href = "/contact"
                onClick = {
                    () => setIsOpen(false)
                }
                className = "text-zinc-600 text-lg font-medium font-metropolis py-2 w-3/4 text-center border-b hover:bg-zinc-50" > Contact < /a> <
                /div> <
                /div>
            )
        } <
        /div> <
        /div>
    );
}

export default Header;