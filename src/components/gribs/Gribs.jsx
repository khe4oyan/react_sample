import './grib.css';

export default function Gribs({ showGribs, data, hideGribs }) {
  if (showGribs == null) { return <></> }

  const grib = data[showGribs].gribs;
  return(
    <div className='gribs'>
      <button onClick={hideGribs} className='close_button center'>x</button>
      <div className='container'>
			<h2 className='gribs__lessonName'>{data[showGribs].lessonName ?? '-'}</h2>
      <a href={data[showGribs].video} target='blank' className='youtube'>video</a>
      {
        grib.map((item, ind) => {
          return <Details data={item} key={`key${ind}`}/>
        })
      }
      </div>
    </div>
  )
}

function Details({ data }) {
  return(
    <details className="gribs__grib">
      <summary>{data[0]}</summary>
      {
        data[1].split(' # ').map((item, ind) => {
          return <p className='gribs__grib__paragpaph' key={`key${ind}`}>{ item }</p>
        })
      }
    </details>
  )
}