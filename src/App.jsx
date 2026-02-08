import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import theme from './theme';
import Layout from './components/Layout';
import './styles/global.css';

import Home from './pages/Home';

// Placeholder Components
import Seniors from './pages/Seniors';

import Schools from './pages/Schools';
import SchoolServices from './pages/SchoolServices';

import FallPortraits from './pages/photography/FallPortraits';
import KinderGrad from './pages/photography/KinderGrad';
import Commencements from './pages/photography/Commencements';
import University from './pages/University';

// Yearbook Routes
import Yearbooks from './pages/yearbooks/Yearbooks';
import Elementary from './pages/yearbooks/Elementary';
import Secondary from './pages/yearbooks/Secondary';

// Apparel Routes
import Apparel from './pages/apparel/Apparel';
import TeamUniforms from './pages/apparel/TeamUniforms';

import About from './pages/About';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import SessionPrep from './pages/SessionPrep';
import Gallery from './pages/Gallery';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Careers from './pages/Careers';
import Ambassadors from './pages/Ambassadors';
import Account from './pages/Account';
import Booking from './pages/Booking';

import SmoothScroll from './components/SmoothScroll';
import CustomCursor from './components/CustomCursor';

import LoadingScreen from './components/LoadingScreen';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LoadingScreen />
      <CustomCursor />
      <SmoothScroll>
        <Router>
          <Layout>
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
              {/* Add all other routes here */}
            </Routes>
          </Layout>
        </Router>
      </SmoothScroll>
    </ThemeProvider>
  );
}

export default App;
