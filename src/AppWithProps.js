import { createElement, Component } from 'react';
import moment from 'moment-timezone';

class AppWithProps extends Component {
    render() {
        const time = moment().format('YYYY年MM月DD日')
        const displayTime = createElement('h1', null, `今日は${time}です。`)
        return displayTime;
    }
}

export default AppWithProps;