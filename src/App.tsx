import * as React from 'react';
import { Provider } from 'react-redux';
import { Layout } from 'antd'

import store from './store'
import AppRoutes from './AppRoutes'

import './App.scss';

class App extends React.Component {
	public render() {
		return (
			<Provider store={store}>
				<div className="App">
					<Layout>
						<AppRoutes />
					</Layout>				
				</div>
			</Provider>
		);
	}
}

export default App;
