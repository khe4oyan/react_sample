import './app.css';
import { data } from './data/data';
import { useState } from 'react';
import Gribs from './components/gribs/Gribs';
import ThemeSetter from './components/themeSetter/ThemeSetter';

export default function App() {
  const [showGribs, setShowGribs] = useState(null);

  const showLessonGribs = (ind) => {
    setShowGribs(ind);
  }

  const hideGribs = () => {
    setShowGribs(null);
  }


  return (
    <div className="App">
      <div className='container'>
        {
          data.map((item ,ind) => {
            return <button onClick={() => {showLessonGribs(ind)}} className='lessonName' key={`key${ind}`}>{ `Lesson ${ind + 1}: ${item.lessonName ?? '-'}` }</button>
          })
        }
      </div>
      <Gribs 
        showGribs={ showGribs } 
        data={ data }
        hideGribs={ hideGribs }
      />

      <ThemeSetter />
    </div>
  );
}
