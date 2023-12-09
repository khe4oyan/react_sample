import './Details.css';

export default function Details({ data }) {
  console.log(data);
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