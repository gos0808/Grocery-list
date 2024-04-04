import { Component } from "react";

export class GroceryList extends Component {
    state = {
        userInput: "",
        groceryList: []
    };

    onChangeEvent(e) {
        this.setState({ userInput: e });
    }

    addItem(input) {
        if (input) {
            let listArray = this.state.groceryList;
            listArray.push(input);
            this.setState({ groceryList: listArray, userInput: '' });
        } else {
            alert('Please, enter the item');
        }
    }

    deleteItem() {
        let listArray = this.state.groceryList;
        listArray = [];
        this.setState({ groceryList: listArray });
    }

    crossedWord(event) {
        const li = event.target;
        li.classList.toggle('crossed');
    }

    onFormSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <div className='makingList' >
                    <input
                        type='text'
                        placeholder="What do you want to buy"
                        onChange={(e) => this.onChangeEvent(e.target.value)}
                        value={this.state.userInput}
                    />
                    <button
                        onClick={() => this.addItem(this.state.userInput)}
                        className='add'>Add</button>
                    <button
                        onClick={() => this.deleteItem(this.state.userInput)}
                        className='clean'>Clean</button>
                    <ul>
                        {this.state.groceryList.map((item, index) => (
                            <li
                                onClick={this.crossedWord}
                                key={index}>{item}
                            </li>
                        ))}
                    </ul>
                </div>
            </form>
        );
    }
}

export default GroceryList;
