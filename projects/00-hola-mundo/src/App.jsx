import './App.css'
import {TwitterFollowCard} from "./TwitterFollowCard.jsx"
export function App(){
  const format=(userName)=> `@${userName}`
  return(
  <section className="App">
    <TwitterFollowCard formatUserName={format} isFollowing="{true}" userName="midudev" name='miguel angel duran'></TwitterFollowCard>

    <TwitterFollowCard formatUserName={format} isFollowing="{false}" userName='pablo herandez'></TwitterFollowCard>

    <TwitterFollowCard formatUserName={format} userName='pheralb' name='Elon musk' ></TwitterFollowCard>
    
    <TwitterFollowCard formatUserName={format} userName='vxnder' name='vanderHart' ></TwitterFollowCard>
    


  
  
  </section>
)}