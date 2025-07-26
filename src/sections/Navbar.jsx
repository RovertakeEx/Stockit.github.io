import React, { useState , useEffect } from 'react'
import { HiMenu, HiX } from 'react-icons/hi';
import { menuItems } from '../data/Menu';
import { setWhatsappButton } from '../data/utils/Nav';

const Navbar = () => {

  const [isMenuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;

      for (let i = 0; i < menuItems.length; i++) {
        const section = document.querySelector(menuItems[i].href);
        if (section) {
          const offsetTop = section.offsetTop;
          const offsetHeight = section.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActive(menuItems[i].href);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function setActive(href) {
    const sanitizedLink = href.replace('#', '');

    setActiveLink(sanitizedLink);
    setWhatsappButton(sanitizedLink);
    
    setTimeout(() => {
          window.history.replaceState(null, '', sanitizedLink === 'home' ? '/' : sanitizedLink);
    }, 1);

  }

  return (
    <nav className='fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100 shadow-sm'>
      <div className='container mx-auto flex item-center justify-between md:h-20 h-16'>
        
        {/*Logo section*/}
        <div className='flex items-center cursor-pointer gap-10'>
          <a onClick={() => setActive('#home')} href='#home'><h2 className='font-bold text-xl'>Stockit</h2></a>

          {/*Main menu section*/}
        <div className='hidden md:flex items-center gap-10'>
          {menuItems.map((link, index) => (
              <a onClick={() => setActive(link.href)} 
              key={index} href={link.href} className={`text-sm font-medium relative after:absolute after:bottom-0 
                after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-600 
                after:transition-all ${activeLink === link.href.replace('#', '') ? "text-blue-600 after:w-full" : "text-gray-600 hover:text-gray-900"}`}>
                  {link.label}
              </a>
            ))}
        </div>
        </div>

        {/*Mobile responsive button*/}
        <div className='flex items-center md:hidden p-2'>
          <button onClick={() => setMenuOpen(!isMenuOpen)}>
            {
              isMenuOpen ? <HiX/> : <HiMenu/>
            }
          </button>
        </div>

        {/*Sign in button section*/}
        <div className='hidden md:flex items-center '>
          <a className=' bg-blue-600 text-white px-6 py-2.5 rounded-lg 
        hover:bg-blue-700 text-sm font-medium transition-all hover:shadow-lg hover:shadow-blue-100' href="">Sign in</a>
        </div>

      </div>
    
      {/*Mobile responsive nav*/}
      {
        isMenuOpen && (
          <div className='md:hidden bg-white border-t border-gray-100 py-4'>
            <div className='container mx-auto px-4 spy-3'>
              {menuItems.map((link, index) => (
                <a onClick={() => {
                  setActive(link.href); 
                  setMenuOpen(false);
                }} 
                  key={index} href={link.href} className={`block text-sm font-medium py-2 
                  ${activeLink === link.href ? "text-blue-600" : "text-gray-600 hover:text-gray-900"}`}>
                    {link.label}
                </a>
              ))}

              <button className='w-full bg-blue-600 text-white px-6 py-2.5 rounded-lg 
              hover:bg-blue-700 text-sm font-medium transition-all hover:shadow-lg hover:shadow-blue-100'>
                <a  href="">Sign in</a>
              </button>
            </div>
          </div>
        )
      }
    </nav>
  )
}

export default Navbar