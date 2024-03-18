import './home.scss'

function Home() {
  return (
    <div className="home">
      <div className="home-body">
        <h1 className='home__title'>Profile</h1>
        <img className='home__img' src="" alt='profile-image' />
        <h2 className='home__name'>亀山 和希</h2>
        <p className='home__text'>React.js勉強中</p>
        <h3 className='home__sub-title'>自己紹介</h3>
        <p className='home__text'>
          千葉県出身の27歳です。
          <br />
        </p>
      </div>
    </div>
  )
}

export default Home
