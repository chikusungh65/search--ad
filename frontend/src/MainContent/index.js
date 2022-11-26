import { Button, Card, Input, Layout } from 'antd';
import React, { useState } from 'react';
import './index.css';

const MainContent = () => {
	const [searchView, setSearchView] = useState(false);
	const [results, setResults] = useState(null);
	const searchItem = (e) => {
		const val = e.target.value;
		if (val && val.length >= 3) {
			if (!searchView) setSearchView(true);
			const requestOptions = {
				method: 'GET',
				redirect: 'follow'
			  };
			  
			  fetch(`http://localhost:8080/api/search/${val}`, requestOptions)
				.then(response => {
					response.json().then(res=>{setResults(res)}).catch(err=>console.log(err))
				})
				.catch(error => console.log('error', error));
		}
	};

	return (
		<Layout.Content>
			<div className={searchView ? 'search-box-results' : 'search-box'}>
				<Input
					placeholder='Type something to search'
					style={{ height: '50px', fontSize: '18px' }}
					onChange={searchItem}
				></Input>
			</div>
			{searchView ? results && results.length ? results.map(item => <div key={item.id} className='card-wrapper'>
						<Card
							
							title={item.headline}
						>
							<h2>{item.primaryText}</h2>
							<p>{item.description}</p>
							<Button
							onClick={()=>window.open(item.imageUrl)}
								type='primary'
								block
								style={{ height: '50px', borderRadius: '8px' }}
							>
								{item.cta}
							</Button>
						</Card>
					</div>) :null : null}
		</Layout.Content>
	);
};

export default MainContent;
