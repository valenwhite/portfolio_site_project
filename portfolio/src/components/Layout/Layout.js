import { SideBar } from '../SideBar/SideBar';
import '../../App.css'; //
import styles from './Layout.module.css';

export const Layout = () => {
    return (
        <div className="App">
            <SideBar />
            <div className="main">
                <h1>HI</h1>
                <span className='tags top-tags'>&lt;body&gt;</span>
        

                <span className='tags bottom-tags'>
                    &lt;/body&gt;
                    <br />
                    <span className='bottom-tag-html'>&lt;/html&gt;</span>
                </span>

            </div>
        </div>
    )
}
