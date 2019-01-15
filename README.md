## FrontEnd BolierPlate

React Project 생성시의 초기 셋팅 및 폴더 구조 및 역활에 대한 문서입니다.

### 0. Usage
현재 프로젝트를 만들어둔 프로젝트로 복사하거나 Fork한 후에 사용하시면 됩니다.

### 1. Spec
현재 작성된 프로젝트의 사용 라이브러리 및 스펙은 아래와 같습니다.
(계속 업데이트 예정.., 라이브러리 옆의 괄호안 숫자는 최소 필수 버전입니다)
Language: Javascript ES6+, Typescript
Framework: React(16.03+)
UI Library:  Ant.Design
State Management: Redux
Async Actions, SideEffect Management: Redux-Saga
Route: React-Router(4.0+)
PackageManager: Yarn or Npm
Build Tool: Webpack(4+)

### 2. Structure
#### 2.1 Folder Structure
```
/
├── public
├── src
│    ├── assets
│    │   ├── fonts
│    │   └── img
│    ├── components
│    │   ├── Header
│    │   └── SideMenu
│    ├── containers
│    ├── pages
│    └── store
├── package.json    
├── config-overrides.js
├── *.d.ts
├── tslint.json
└── tsconfig.json
```

public - build시 base가 되는 index.html 파일 및 meta관련 정보, favicon과 같은 리소스들 담고 있습니다.

src - 개발할때의 / 가 되는 폴더로 개발 시 src 폴더 내부에 모든 것들을 작성합니다.
폴더 내부는 assets, components, containers, pages, store 로 구성되어 있습니다.
 
package.json - 프로젝트의 패키지 설치 정보 파일입니다. 

config-ovverrides.js - 프로젝트가 CRA로 되어있어 webpack이 감추어져 있습니다. webpack에 따로 세팅을 해야할 때(ex: plugin 설치나 사용) eject를 하거나, 이 파일을 이용해서 설정해 줍니다.

*.d.ts - typescript가 인식하지 못하는 모듈을 선언해서 인식하도록 해줍니다.

tslint.json, tsconfig.json - typescript의 설정 파일입니다. typescript가 너무 방어적인 세팅이 많아 조금 유연하게 사용하기 위해 몇가지 제한을 풀어두었습니다.


#### 2.2 상세
##### 2.2.1 Src 폴더 - React
src폴더는 Project의 핵심이 되는 폴더로 개발자는 프로젝트의 대부분을 이 폴더내부에서 다루게 됩니다.
###### Components
UI요소들 (예: Button, Calendar, Input Form, Table, Popup, Checkbox, Etc...) 을 하나의 React 컴포넌트로 분리시키고 각 컴포넌트들을
폴더별로 구분해 Components폴더에 넣습니다. 이렇게 작성된 컴포넌트들은 Page나 Containers에서 자유롭게 재사용이 가능합니다. 
대부분의 컴포넌트들은 함수형으로 작성되고, State가 없거나 자기 자신만이 사용하는 State를 가지게 되고, 그렇지 않을 경우 컴포넌트의 Container를 함께 작성해 줍니다.

```
// 함수형 컴포넌트 예시
const SearchBar: React.SFC = () => {
    return (
	    <input id="search-bar" type="text" />
    );
};

export default SearchBar;
```

###### Containers
Container는 사용하려는 컴포넌트가 특별한 연산을 필요로 할 때, 어떠한 특별한 액션을 수행하여야 할 때, State의 관리, Redux와의 연결,
비동기 액션 호출 등의 역활들(계산하거나 함수를 수행하거나 기타 등등..)은 전부 Container를 통해 이루어지고 이를통해 나온 결과값(대부분 State값)을 Component의 Prop으로 내려주는 역활을 합니다.

###### Pages
Page는 말그대로 화면의 구성을 담당합니다. 화면은 하나의 Page가 되고 이 Page는 컴포넌트(또는 컨테이너)들로 이루어집니다.
Page컴포넌트들은 Layout구성 및 컴포넌트 배치만의 역활을 담당하고 있으며, Route될 때 지정되는 컴포넌트가 됩니다.

###### assets
assets은 Project의 Resource를 관리합니다.
Image, Fonts, Icon과 같은 Resource들을 assets 폴더에 넣고 관리합니다.

###### store
store는 redux를 다루는 곳입니다.
도메인이름으로 각각 폴더를 만들고 폴더안에 Model, Action, Reducer, Saga를 작성,
Root폴더(store폴더)에서 각 도메인에서 만든 Action, Reducer, Saga들을 Combine해 Store를 생성합니다.


##### 2.2.2 Store 폴더 - Redux
store 폴더는 redux의 Actions, Reducer, Saga들을 다루는 폴더로, 
Actions는 앱에서 특정한 행동들에 대한 정의,
Reducer는 Action을 통해 처리된 결과를 현재의 State와 합쳐 새로운 State를 만드는 역활을
Store는 반영된 State을 담는 역활을 합니다.
여기서 한가지 더해 Saga는 ajax와 같은 비동기액션의 처리와 그에 따른 사이드 이펙트 처리를 담당합니다.

#### 2.3 TypeScript
작성 예정 입니다...

### 3. 실행
작성 당시의 npm 및 node버전입니다.
NPM - v6.4.1
Node - v8.1.0
추가로 Packagemanager는 yarn을 사용하고 있으니 yarn도 함께 설치해 줍시다.
```bash
npm install -g yarn
```
#### 3.1 Install
```bash
git clone git@bitbucket.org:buzzni/pos.git
cd { YOUR_PROJECT }
yarn install
```

#### 3.2 Development
```bash
yarn start or npm start
```

#### 3.3 Build
```bash
yarn build or npm build
```







 
