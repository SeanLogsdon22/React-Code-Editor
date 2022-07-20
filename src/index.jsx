import { Fragment } from 'react'
import 'bulmaswatch/superhero/bulmaswatch.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import ReactDOM from 'react-dom'
import TextEditor from './components/text-editor'
import { Provider } from 'react-redux'
import { store } from './state'
import CellList from './components/cell-list'

const App = () => {
    return (
        <Fragment>
        <Provider store={store}>
            <div>
                <CellList />
            </div>
        </Provider>
        </Fragment>
        
    )
}

ReactDOM.render(<App />, document.querySelector('#root'));