import React from 'react'
import { useParams } from 'react-router-dom'
import Details from '../../components/Details/Details';
import { data } from '../../data/data';

import './Grib.css';

export default function Gribs() {
	const { ind } = useParams();

	return (
		<div className='gribs'>
      <div className='container'>
			<h2 className='gribs__lessonName'>{data[ind].lessonName ?? '-'}</h2>
      {
        data[ind].video &&
        <a href={data[ind].video} target='blank' className='youtube'>video</a>
      }
      {
        data[ind].gribs.map((item, ind) => {
          return <Details data={item} key={`key${ind}`}/>
        })
      }
      </div>
    </div>
	)
}
