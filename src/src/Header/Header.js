import Stack from 'react-bootstrap/Stack';
import './Header.css'

function Header() {

    return <div className='mainHeader'>

    <Stack direction="horizontal" gap={3}>
    <div className='leftHeader'>
      <img src="/img/hot-tea 1.png" width={40} height={40}/>
      <div className='leftHeaderText'>
      <h1>REACT TEA</h1>
      <p>Магазин лучшего чая</p>
      </div>
      </div>

      <div className='rightHeader ms-auto'>
      <img src="/img/Group.svg" width={20} height={20}/>
      <span>1500 р.</span>
      <img src="/img/Union.svg" width={20} height={20}/>
      <img src="/img/Favorite.svg" width={20} height={20}/>
      </div>
      </Stack>
    </div>

  }

export default Header;




