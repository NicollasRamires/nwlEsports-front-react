import './styles/main.css';
import logoImg from './assets/Logo.svg';

function App() {
  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>
      <img className='max-w-xs' src={logoImg} alt=""></img>

      <h1 className='text-6xl text-white font-black mt-20'>
        
          Seu <span className='text-transparent bg-nlw-gradient bg-clip-text'>duo</span> está aqui
        
      </h1>

      <div className='grid grid-cols-6 gap-6'>
        <a href="" className='relative'>
          <img src="/game-1.png" alt="" />

          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient'>
            <strong className='font-bold text-white'>League of Legends</strong>
            <span className='text-zinc-300 text-sm'>4 anúncios</span>
          </div>
        </a>
        <a href="" className='relative'>
          <img src="/game-2.png" alt="" />
        </a>
        <a href="" className='relative'>
          <img src="/game-3.png" alt="" />
        </a>
        <a href="" className='relative'>
          <img src="/game-4.png" alt="" />
        </a>
        <a href="" className='relative'>
          <img src="/game-5.png" alt="" />
        </a>
        <a href="" className='relative'>
          <img src="/game-6.png" alt="" />
        </a>
      </div>   
    </div>
  )
}

export default App;
