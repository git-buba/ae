import { ModalProvider } from '@/components/Modal';
import { Footer } from '@/features/Footer';
import { Header } from '@/features/Header';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Outlet } from 'react-router';

const queryClient = new QueryClient();

export const MainPage = () => {
  return (
    <ModalProvider>
      <QueryClientProvider client={queryClient}>
        <Header />
        <Outlet />
        <Footer />
      </QueryClientProvider>
    </ModalProvider>
  );
};
