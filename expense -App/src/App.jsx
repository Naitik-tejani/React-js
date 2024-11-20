import React from 'react';
import BudgetInput from './components/BudgetInput';
import ExpenseInput from './components/ExpenseInput';
import ExpenseList from './components/ExpenseList';
import Summary from './components/Summary';
import { Container } from './components/styledComponents';

const App = () => {
  return (
    <Container>
      <h1>Budget App</h1>
      <BudgetInput />
      <ExpenseInput />
      <Summary />
      <ExpenseList />
    </Container>
  );
};

export default App;
