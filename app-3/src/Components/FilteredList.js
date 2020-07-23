import React, {Component} from 'react';

class FilteredList extends Component {
    constructor() {
        super();

        this.state = {
            filterString: '',
            foods: ['Wings', 'Pizza', 'Cheesecake', 'Burgers', 'Fries']
        }
    }

    handleInput(filter) {
        this.setState({
            filterString: filter
        })
    }

    render() {
        let foodsToDisplay = this.state.foods.filter((element, index) => {
            return element.includes(this.state.filterString);
        })
        .map((element, index) => {
            return <h2 key={index}>{element}</h2>
        })

        return (
            <div className='App'>
                <input onChange={e => this.handleInput(e.target.value)} type='text' />
                {foodsToDisplay}
            </div>
        )}
}


export default FilteredList;