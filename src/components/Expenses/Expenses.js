import './Expenses.css';
import ExpenseFilter from './ExpenseFilter';
import Card from '../UI/Card';
import {useState} from 'react';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
    const [filteredYear, setEnteredYear] = useState('2020');
    const filterChangeHandler = (selectedYear) => {
        setEnteredYear(selectedYear);
    }

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return(
        <div>
            <Card className='expenses'>
                <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList items={filteredExpenses} />
            </Card>
        </div>

    )
}

export default Expenses;