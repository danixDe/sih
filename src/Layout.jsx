import { useState, useEffect } from 'react';
import Header from './header';
import Sidebar from './sidebar';
import styles from './layout.module.css'; 

const Layout = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 760) {
        setSidebarOpen(true); 
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={styles.container}>
      <Header toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} />
      <main className={`${styles.content} ${isSidebarOpen ? styles.withSidebar : ''}`}>
        {children}
      </main>
    </div>
  );
};

export default Layout;
