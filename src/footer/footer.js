import react from 'react'
import './footer.css'
import fb from './images/facebook.png'
import ig from './images/instagram.png'
import tw from './images/twitter.png'
// import yt from './images/youtube.png'

export default function Ftr(){
    return(
        <footer className='footer'>
        <img src={fb}></img>
        <img src={ig}></img>
        <img src={tw}></img>
        
        </footer>
    )
}