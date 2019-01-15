import * as React from 'react'
import { bindActionCreators, compose, Dispatch } from 'redux'
import { connect } from 'react-redux'
import { returntypeof } from 'react-redux-typescript'

import { RootState } from '../store/rootReducer'

const mapStateToProps = (state: RootState) => {
    return {
        
    }
}

const mapDispatchToProps = (dispatch: Dispatch) =>
    bindActionCreators(
        {
            fetchChecks: checkActions.fetchChecks,
        },
        dispatch
    )

const statePropTypes = returntypeof(mapStateToProps)
const actionPropTypes = returntypeof(mapDispatchToProps)

type Props = typeof statePropTypes & typeof actionPropTypes
type State = {}

class CategoryContainer extends React.Component<Props, State> {
    public componentDidMount() {
        this.props.fetchCategories()
    }
    public componentWillUpdate(nextProps: Props) {
        console.log(nextProps)
    }
    public render() {
        return (
            <div>
                1
            </div>
        )
    }
}

export default compose(connect(mapStateToProps, mapDispatchToProps))(CategoryContainer)
