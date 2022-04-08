import './Expenses.css';
import ExpenseFilter from './ExpenseFilter';
import Card from '../UI/Card';
import {useState} from 'react';
import ExpensesList from './ExpensesList';

const Expenses = (props) => {
    const [enteredYear, setEnteredYear] = useState('2020');
    const filterChangeHandler = (selectedYear) => {
        setEnteredYear(selectedYear);
    }

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === enteredYear;
    });

    return(
        <div>
            <Card className='expenses'>
                <ExpenseFilter selected={enteredYear} onChangeFilter={filterChangeHandler} />
                <ExpensesList items={filteredExpenses} />
            </Card>
        </div>

    )
}

export default Expenses;