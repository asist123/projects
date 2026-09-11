import './App.css'
export function App () {
  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'></header>
      <header>
        <img className='tw-followCard-avatar' src="https://unavatar.io/whatsapp/phone:34660021551" />
        
        <div className='tw-followCard-info'>
          <strong>Miguel Ángel Durán</strong>
          <span className='tw-followCard-infoUserName'>@midudev</span>
        </div>
      </header>

      <aside className='tw-followCard-button'>
        <button>
          Seguir
        </button>
      </aside>
    </article>
  )
}