import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { FavoritesProvider } from './context/FavoritesContext';
import { CartProvider } from './context/CartContext';

import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { QuickViewModal } from './components/QuickViewModal';
import { NotificationToast } from './components/NotificationToast';
import { ScrollToTop } from './components/ScrollToTop';
import { StickyReservationBar } from './components/StickyReservationBar';

import { Home } from './pages/Home';
import { AboutPage } from './pages/AboutPage';
import { MenuPage } from './pages/MenuPage';
import { OffersPage } from './pages/OffersPage';
import { ChefsPage } from './pages/ChefsPage';
import { GalleryPage } from './pages/GalleryPage';
import { ReservationPage } from './pages/ReservationPage';
import { TestimonialsPage } from './pages/TestimonialsPage';
import { BlogPage } from './pages/BlogPage';
import { FAQPage } from './pages/FAQPage';
import { ContactPage } from './pages/ContactPage';
import { CartPage } from './pages/CartPage';
import { FavoritesPage } from './pages/FavoritesPage';
import { NotFoundPage } from './pages/NotFoundPage';

// Scroll to top on route navigation
const ScrollToTopOnNavigate = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  return (
    <ThemeProvider>
      <FavoritesProvider>
        <CartProvider>
          <BrowserRouter>
            <ScrollToTopOnNavigate />
            <div className="flex flex-col min-h-screen bg-[#121212] text-white selection:bg-[#C62828] selection:text-white">
              <Navbar />

              <main className="flex-1">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/menu" element={<MenuPage />} />
                  <Route path="/offers" element={<OffersPage />} />
                  <Route path="/chefs" element={<ChefsPage />} />
                  <Route path="/gallery" element={<GalleryPage />} />
                  <Route path="/reservation" element={<ReservationPage />} />
                  <Route path="/testimonials" element={<TestimonialsPage />} />
                  <Route path="/blog" element={<BlogPage />} />
                  <Route path="/faq" element={<FAQPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/cart" element={<CartPage />} />
                  <Route path="/favorites" element={<FavoritesPage />} />
                  <Route path="*" element={<NotFoundPage />} />
                </Routes>
              </main>

              <Footer />
              <CartDrawer />
              <QuickViewModal />
              <NotificationToast />
              <ScrollToTop />
              <StickyReservationBar />
            </div>
          </BrowserRouter>
        </CartProvider>
      </FavoritesProvider>
    </ThemeProvider>
  );
}
