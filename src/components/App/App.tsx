import React, {Component} from 'react';
import './App.css';
import { cn } from '@bem-react/classname';

const BLOCK = cn('App');

export interface AppProps {
    handleClick: (value: boolean) => void;
    variable: boolean;
}

class App extends Component<AppProps> {
    render() {
        return (
            <div className={BLOCK()}>
                {this.getHeader()}
                {this.getContent()}
            </div>
        );
    }

    private getContent = () => {
        const {
            handleClick,
            variable
        } = this.props;

        return (
            <div className={BLOCK('Content')}>
                <button
                    // onClick={handleClick}
                >
                    Action
                </button>
            </div>
        )
    };

    private getHeader = () => {
        return (
            <header className={BLOCK('Header')}>
                React boilerplate
            </header>
        );
    };
}

export default App;
