import './App.css'
import {TwitterFollowCard} from './TwitterFollowCard.jsx'

export function  App (){
  const formattedUserName=<span>@midudev</span>
  return(
    <section className='App'>
      <TwitterFollowCard isFollowing username="midudev" name="Miguel Ángel Durán"></TwitterFollowCard>

      <TwitterFollowCard isFollowing={false} userName="phralb" name="pablo hernandez"></TwitterFollowCard>

      <TwitterFollowCard isFollowing userName="elonmusk" name="Elon Musk"> </TwitterFollowCard>

      <TwitterFollowCard isFollowing userName="vxnder" name="vanderhart"></TwitterFollowCard>

      





    </section>
  )
}

//1:25:00