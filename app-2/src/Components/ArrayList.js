import React, {Component} from 'react';

class ArrayList extends Component {
    constructor() {
        super();

        this.state = {
            food: ['Wings', 'Burgers', 'Fries', 'Cheesecake', 'Bacon']
        }
    }

    render() {
        let FoodList = this.state.food.map((element, index) => {
            return <h2 key={index}>{element}</h2>
        })
        return <div className='App'>{FoodList}</div>
    }
}

export default ArrayList;