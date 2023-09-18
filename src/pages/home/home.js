
import './home.css'
import { useResolvedPath } from 'react-router-dom';
import Navbar from '../../components/navbar/navbar'
import Header from '../../components/headar/Header'
import Featured from '../../components/featured/Featured';
import PropertyList from '../../components/propertyList/PropertyList';
import FeaturedProperty from '../../components/featuredProperty/FeaturedProperty';
import MailList from '../../components/mailList/MailList';
import Footer from '../../components/footer/Footer';

const Home = () => {
  return (
    <div>
    <Navbar/>
    <Header/>
    <div className='homeContainer'>
      <Featured/>
      <h1 className='homeTitle'>Browse by property type</h1>
      <PropertyList/>
      <h1>Homes guests love</h1>
      <FeaturedProperty/>
      <MailList/>
      <Footer/>
    </div>
    
    </div>
  )
}

export default Home
