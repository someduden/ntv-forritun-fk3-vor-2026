import './App.css';
import { Layout } from '@/components/Layout';
import { AboutPage } from '@/pages/AboutPage';
import { HomePage } from '@/pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
import { SecretSite } from './pages/SecretSite';
import { ProtectedRoute } from './auth/ProtectedRoute';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route
          path="secret"
          element={
            <ProtectedRoute>
              <SecretSite />
            </ProtectedRoute>
          }
        />
      </Route>
    </Routes>

    // <Layout activePage={page} onNavigate={setPage}>
    //   {page === 'home' ? <HomePage /> : <AboutPage />}
    // </Layout>
  );
}

export default App;
