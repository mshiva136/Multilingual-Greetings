import {useState} from 'react'
import GreetItem from '../GreetItem'
import {StyButton} from './styledComponents'

import './index.css'

const languageList = {
  english: 'English',
  tamil: 'Tamil',
  telugu: 'Telugu',
}

function MultiGreet(props) {
  const [activeLang, setActiveLang] = useState(languageList.english)
  const {details} = props

  return (
    <div className="bgDiv">
      <h1>Multilingual Greetings</h1>
      <div className="BtnDiv">
        <StyButton
          onClick={() => setActiveLang(languageList.english)}
          active={activeLang === languageList.english}
        >
          {languageList.english}
        </StyButton>
        <StyButton
          onClick={() => setActiveLang(languageList.tamil)}
          active={activeLang === languageList.tamil}
        >
          {languageList.tamil}
        </StyButton>
        <StyButton
          onClick={() => setActiveLang(languageList.telugu)}
          active={activeLang === languageList.telugu}
        >
          {languageList.telugu}
        </StyButton>
      </div>
      <ul>
        {details.map(eachItem => (
          <GreetItem active={activeLang} key={eachItem.id} details={eachItem} />
        ))}
      </ul>
    </div>
  )
}

export default MultiGreet
