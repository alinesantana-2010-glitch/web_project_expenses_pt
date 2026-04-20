let budgetValue = 0;
let totalExpensesValue = 0;

const expenseEntries = [
    ["groceries", 33],
    ["restaurants", 50],
    ["transport", 12],
    ["home", 70],
    ["subscriptions", 14],
    ["groceries", 28],
    ["subscriptions", 12],
];
for (let i = 0; i < expenseEntries.length; i++) {
  totalExpensesValue += expenseEntries[i][1];
  console.log("Despesas totais: " + totalExpensesValue);
}

function calculateAverageExpense() {
  if (expenseEntries.length === 0) {
    return 0;
  }
  return totalExpensesValue / expenseEntries.length;
}

function calculateBalance() {
  return budgetValue - totalExpensesValue;
}

let balanceColor = "green";

function updateBalanceColor() {
  if (calculateBalance() < 0) {
    balanceColor = "red";
  } else if (calculateBalance() < budgetValue * 0.25) {
    balanceColor = "orange";
  } else {
    balanceColor = "green";
  }
}


function calculateCategoryExpenses(category) {
  let total = 0;
  for (let i = 0; i < expenseEntries.length; i++) {
    if (expenseEntries[i][0] === category) {
      total += expenseEntries[i][1];
    }
  }
  return total;
}


function calculateLargestCategory() {
  const categories = ["groceries", "restaurants", "transport", "home", "subscriptions"];
  const categoriesTotals = [];

  for (let i = 0; i < categories.length; i++) {
    categoriesTotals.push([categories[i], calculateCategoryExpenses(categories[i])]);
  }

  let largestCategory = categoriesTotals[0][0];
  let largestTotal = categoriesTotals[0][1];

  for (let i = 1; i < categoriesTotals.length; i++) {
    if (categoriesTotals[i][1] > largestTotal) {
      largestTotal = categoriesTotals[i][1];
      largestCategory = categoriesTotals[i][0];
    }
  }

  return largestCategory;
}


function addExpenseEntry(entry) {
  expenseEntries.push(entry);
  totalExpensesValue += entry[1];
}


const defaultExpenses = [...expenseEntries];

function saveToLocalStorage(itemName, itemValue) {
  if (Array.isArray(itemValue)) {
    itemValue = JSON.stringify(itemValue);
  }
  localStorage.setItem(itemName, itemValue);
}

function loadFromLocalStorage() {
  const storedBudgetValue = localStorage.getItem("budgetValue");
  const storedExpenseEntries = localStorage.getItem("expenseEntries");

  if (storedBudgetValue) {
    budgetValue = parseFloat(storedBudgetValue);
  } else {
    saveToLocalStorage("budgetValue", budgetValue);
  }

  if (storedExpenseEntries) {
    const parsedEntries = JSON.parse(storedExpenseEntries);
    expenseEntries.length = 0;
    expenseEntries.push(...parsedEntries);

    totalExpensesValue = 0;
    for (const expense of expenseEntries) {
      totalExpensesValue += expense[1];
    }
  } else {
    saveToLocalStorage("expenseEntries", expenseEntries);
  }
}

