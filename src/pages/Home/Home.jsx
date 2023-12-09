import React from 'react'
import { Link } from 'react-router-dom';
import { data } from '../../data/data';
import ROUTES from '../../data/routes';
import './Home.css';

export default function Home() {
	return (
		<div>
			{
				data.map((item, ind) => (
					item.lessonName == '(lost)' ?
					<div className='lesson lost' key={`key${ind}`}>(lost) 
						<p className='lessonIndex'>| {ind + 1}</p>
					</div> :
					<Link className='lesson' to={`${ROUTES.GRIBS}/${ind}`} key={`key${ind}`}>
						<p className='lessonName'>{item.lessonName}</p>
						<p className='lessonIndex'>| {ind + 1}</p>
					</Link>
				))
			}
		</div>
	)
}
