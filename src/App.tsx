import { MagnifyingGlassPlus } from 'phosphor-react';
import './styles/main.css';
import logoImg from './assets/Logo.svg';
import { GameBanner } from './components/GameBanner';
import { CreateAddBanner } from './components/CreateAddBanner';

function App() {
  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>
      <img className='max-w-xs' src={logoImg} alt=""></img>

      <h1 className='text-6xl text-white font-black mt-20'>
        
          Seu <span className='text-transparent bg-nlw-gradient bg-clip-text'>duo</span> está aqui
        
      </h1>

      <div className='grid grid-cols-6 gap-6 pt-12'>
        <GameBanner bannerUrl='./public/game-1.png' title='League of legends' adsCount={1}/>
      </div>   
      <CreateAddBanner/>
    </div>
  )
}

export default App;
