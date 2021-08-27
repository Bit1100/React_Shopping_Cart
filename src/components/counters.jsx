import React, { Component } from 'react';
import Counter from "./counter";

class Counters extends Component {
    render() {
        const { onResetAll, counters, onDelete, onReset, onIncrement, onDecrement } = this.props;
        return (
            <React.Fragment>
                <button className="btn"
                    onClick={() => onResetAll()}>
                    ResetAll</button>
                { counters.map((counter) =>
                    <Counter
                        key={counter.id}
                        counter={counter}
                        onDelete={onDelete}
                        onReset={onReset}
                        onIncrement={onIncrement}
                        onDecrement={onDecrement}
                    >
                        <h1>Category-{counter.itemCategory}</h1>
                    </Counter>)
                };
            </React.Fragment>
        );
    }
}

export default Counters;