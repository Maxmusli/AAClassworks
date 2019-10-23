import React, {Component} from 'react';
import Tab from './tab';

class Tabs extends Component {
    constructor(props) {
        super(props)
        this.state = {
            panes: this.props.panes,  
            selectedPane: 0
        }
    }

    showTab(tab) {
        this.setState({selectedPane: tab})
    }


    render() {
        const tabComps = this.state.panes.map(ele => {
            return (
                <Tab 
                    title={ele.title}
                    content={ele.content}
                />
            )
        });



        return (
            <div>
                <h1>Tab</h1>
                <ul className="tabs">
                   {tabComps[this.state.selectedPane]}
                </ul>
            </div>
        );
    }
}

export default Tabs;