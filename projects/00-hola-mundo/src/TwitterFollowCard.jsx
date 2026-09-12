
export function TwitterFollowCard({formatUserName,username,name,isFollowing}){
  const addAt=(username)=>`@${username}`
    
    return(
    <article className='tw-followCard'>
      <header className='tw-followCard-header'></header>
      <header>
        <img className='tw-followCard-avatar' src={`/https://unavatar.io/tiktok/chucho'${username}`} />
        
        <div className='tw-followCard-info'>
          <strong>{name}</strong>
          <span className="tw-followCard-infoUsername">{formatUserName(username)}</span>
        </div>
      </header>

      <aside >
        <button className='tw-followCard-button'>
          Seguir
        </button>
      </aside>
    </article>        
    )
}