import Stack from 'react-bootstrap/Stack';
import './Header.css'

function Header() {

    return <div className='mainHeader'>

    <Stack direction="horizontal" gap={3}>
    <div className='leftHeader'>
      <img src="/img/logotip.png" width={175} height={140}/>
      <div className='leftHeaderText'>
      <h1>SCAMERS</h1>
      <p>BEST OF SKINCHANGER   </p>
      </div>
      </div>

      <div className='rightHeader ms-auto'>
      <div className='peq'>
        <img src="/img/Basket.png" width={30} height={30} style={{
          margin: 'auto'
        }}/>
        <img src="/img/love.png" width={30} height={30} style={{
          margin: 'auto'}}/>
        <img src="/img/profile.png" width={30} height={30} style={{
          margin: 'auto'}}/>
      </div>
      </div>
      <div className='find'>
          <span style={{
            margin: "auto"
          }}>Поиск...</span>
           <img src='./img/find.png'></img>
      </div>
      </Stack>
    </div>

  }

export default Header;




