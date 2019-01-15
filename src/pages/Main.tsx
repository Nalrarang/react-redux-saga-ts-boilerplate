import * as React from 'react'
import Header from '../components/Header/Header'
import CategoryContainer from '../containers/CategoryContainer'
   
class Main extends React.Component {
    public render() {
        return (
            <div className="content">
                <Header />
                <CategoryContainer />
            </div>
        )
    }
}

export default Main