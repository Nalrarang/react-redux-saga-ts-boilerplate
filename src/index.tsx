import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import { LocaleProvider } from 'antd';
import ko_KR from 'antd/lib/locale-provider/ko_KR';

import App from './App';
import './index.scss';

ReactDOM.render(
    <LocaleProvider locale={ko_KR}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </LocaleProvider>
    , document.getElementById('root') as HTMLElement
);
registerServiceWorker();

