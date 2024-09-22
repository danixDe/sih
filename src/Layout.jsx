import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom'; // Import Outlet for nested routes
import Header from './header';
import Sidebar from './sidebar';
import styles from './layout.module.css'; 

const Layout = () => {
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
        {/* Use Outlet to render the child route components */}
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
