
import { useEffect, useState } from 'react';
import { MobileMenuButton } from './MobileMenuButton';

export default function Header() {

const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
    <header  className={`sticky top-0 z-20 w-full transition-all duration-300 
        ${scrolled ? 'bg-customBlue bg-opacity-50' : 'bg-customBlue'}`}>
      <div className='px-4 py-2 flex justify-between items-center'>
        <MobileMenuButton />
      </div>
    </header>
    </>
  )
}


