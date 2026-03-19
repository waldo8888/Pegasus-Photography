import React, { Suspense } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import theme from './theme';
import Layout from './components/Layout';
import './styles/global.css';

import LoadingScreen from './components/LoadingScreen';
import SmoothScroll from './components/SmoothScroll';
import CustomCursor from './components/CustomCursor';

// Lazy-loaded pages for code splitting
const Home = React.lazy(() => import('./pages/Home'));
const Seniors = React.lazy(() => import('./pages/Seniors'));
const Schools = React.lazy(() => import('./pages/Schools'));
const SchoolServices = React.lazy(() => import('./pages/SchoolServices'));
const FallPortraits = React.lazy(() => import('./pages/photography/FallPortraits'));
const KinderGrad = React.lazy(() => import('./pages/photography/KinderGrad'));
const Commencements = React.lazy(() => import('./pages/photography/Commencements'));
const University = React.lazy(() => import('./pages/University'));
const Yearbooks = React.lazy(() => import('./pages/yearbooks/Yearbooks'));
const Elementary = React.lazy(() => import('./pages/yearbooks/Elementary'));
const Secondary = React.lazy(() => import('./pages/yearbooks/Secondary'));
const Apparel = React.lazy(() => import('./pages/apparel/Apparel'));
const TeamUniforms = React.lazy(() => import('./pages/apparel/TeamUniforms'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));
const FAQ = React.lazy(() => import('./pages/FAQ'));
const SessionPrep = React.lazy(() => import('./pages/SessionPrep'));
const Gallery = React.lazy(() => import('./pages/Gallery'));
const Blog = React.lazy(() => import('./pages/Blog'));
const BlogPost = React.lazy(() => import('./pages/BlogPost'));
const Careers = React.lazy(() => import('./pages/Careers'));
const Ambassadors = React.lazy(() => import('./pages/Ambassadors'));
const Account = React.lazy(() => import('./pages/Account'));
const Booking = React.lazy(() => import('./pages/Booking'));

// New pages
const Safety = React.lazy(() => import('./pages/Safety'));
const PrivacyPolicy = React.lazy(() => import('./pages/PrivacyPolicy'));
const Terms = React.lazy(() => import('./pages/Terms'));
const FindSchool = React.lazy(() => import('./pages/FindSchool'));
const ParentPortal = React.lazy(() => import('./pages/ParentPortal'));
const Prepay = React.lazy(() => import('./pages/Prepay'));
const Proofing = React.lazy(() => import('./pages/Proofing'));
const AdminPortal = React.lazy(() => import('./pages/AdminPortal'));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LoadingScreen />
      <CustomCursor />
      <SmoothScroll>
        <Router>
          <Layout>
            <Suspense fallback={null}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/for-seniors" element={<Seniors />} />
                <Route path="/schools" element={<Schools />} />
                <Route path="/schools/services" element={<SchoolServices />} />

                {/* Photography Routes */}
                <Route path="/photography/fall" element={<FallPortraits />} />
                <Route path="/photography/kinder-junior" element={<KinderGrad />} />
                <Route path="/photography/commencements" element={<Commencements />} />
                <Route path="/university" element={<University />} />

                {/* Yearbook Routes */}
                <Route path="/yearbooks" element={<Yearbooks />} />
                <Route path="/yearbooks/elementary" element={<Elementary />} />
                <Route path="/yearbooks/secondary" element={<Secondary />} />

                {/* Apparel Routes */}
                <Route path="/apparel" element={<Apparel />} />
                <Route path="/apparel/uniforms" element={<TeamUniforms />} />

                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/session-prep" element={<SessionPrep />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/ambassadors" element={<Ambassadors />} />
                <Route path="/account" element={<Account />} />
                <Route path="/booking" element={<Booking />} />

                {/* Trust & Safety */}
                <Route path="/safety" element={<Safety />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/terms" element={<Terms />} />

                {/* Parent Portal */}
                <Route path="/find-school" element={<FindSchool />} />
                <Route path="/parent-portal" element={<ParentPortal />} />
                <Route path="/prepay" element={<Prepay />} />
                <Route path="/proofing" element={<Proofing />} />

                {/* Admin Portal */}
                <Route path="/admin-portal" element={<AdminPortal />} />
              </Routes>
            </Suspense>
          </Layout>
        </Router>
      </SmoothScroll>
    </ThemeProvider>
  );
}

export default App;
