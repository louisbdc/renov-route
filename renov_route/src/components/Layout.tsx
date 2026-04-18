import Header from './Header';
import Footer from './Footer';
import ScrollProgressBar from './effects/ScrollProgressBar';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-white text-[#0F172A] selection:bg-[#FACC15] selection:text-[#0F172A]">
      <ScrollProgressBar />
      <Header />
      <main className="relative">
        {children}
      </main>
      <Footer />
    </div>
  );
}
