import {logo} from '../assets';

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt="logo" className='w-28 object-contain'/>
        <button 
          type='button '
          onClick={()=>window.open('https://github.com')}
          className='black_btn'
          >
        Github</button>
      </nav>

      <h1 className='head_text'>Summarize Your Articles Now <br className='max-md:hidden'/><span className='orange_gradient'>Open AI GPT4</span>    
      </h1>
      <h2 className='desc'>Article shortened helps you to summarize your lengthy Article or content that can save your valuable time</h2>

    </header>
  )
}

export default Hero