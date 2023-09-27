import _ from 'lodash';

import moment from 'moment';

const getMonthsToNow = (date) => {
  return date && moment(date, 'YYYY-MM-DD').isBefore(new Date())
    ? moment(new Date()).diff(moment(date, 'YYYY-MM-DD'), 'months', true)
    : 0;
}

const calculatedFields = ({
  ...input
}) => {
  return {
    ...input,
  };
};

const transform = (input) => {
  const X = calculatedFields(input);
  const X_new = {};

  X_new['Intercept'] = 1;
  X_new['loan_grade:A'] = Number(X['grade'] === 'A');
  X_new['loan_grade:B'] = Number(X['grade'] === 'B');
  X_new['loan_grade:C'] = Number(X['grade'] === 'C');
  X_new['loan_grade:D'] = Number(X['grade'] === 'D');
  X_new['loan_grade:E'] = Number(X['grade'] === 'E');
  X_new['loan_grade:F'] = Number(X['grade'] === 'F');
  X_new['person_home_ownership:OWN'] = Number(X['home_ownership'] === 'OWN');
  X_new['person_home_ownership:OTHER_RENT'] = Number(_.includes(['OTHER', 'NONE', 'RENT'], X['home_ownership']));
  X_new['loan_intent:DEBTCONSOLIDATION'] = Number(X['purpose'] === 'DEBT_CONSOLIDATION');
  X_new['loan_intent:HOMEIMPROVEMENT'] = Number(X['purpose'] === 'HOME_IMPROVEMENT');
  X_new['loan_intent:MEDICAL'] = Number(X['purpose'] === 'MEDICAL');
  X_new['loan_intent:PERSONAL'] = Number(X['purpose'] === 'EDUCATIONAL');
  X_new['loan_intent:VENTURE'] = Number(X['purpose'] === 'SMALL_BUSINESS');
  X_new['person_age:<36.0'] = Number(X['age'] < 36);
  X_new['person_age:36.0-52.0'] = Number(36 <= X['age'] && 52 >= X['age']);
  X_new['person_age:>68.0'] = Number(X['age'] > 68);
  X_new['person_income:163k-322k'] = Number(X['annual_inc'] >= 163000 && X['annual_inc'] <= 322000);
  X_new['person_income:322k-482k'] = Number(X['annual_inc'] >= 322000 && X['annual_inc'] <= 482000);
  X_new['person_income:482k-641k'] = Number(X['annual_inc'] >= 482000 && X['annual_inc'] <= 641000);
  X_new['person_income:>641k'] = Number(X['annual_inc'] >= 641000);
  X_new['person_emp_length:6.2'] = Number(X['experience'] === 6);
  X_new['person_emp_length:6.2-12.4'] = Number(X['experience'] > 6 && X['experience'] <= 12);
  X_new['person_emp_length:18.6-24.8'] = Number(X['experience'] > 18 && X['experience'] <= 24);
  X_new['person_emp_length:>24.8'] = Number(X['experience'] > 24);
  X_new['loan_amnt:<7.4k'] = Number(X['loan_amnt'] < 7400);
  X_new['loan_amnt:14.3k-21.2k'] = Number((X['loan_amnt'] >= 14300) && (X['loan_amnt'] <= 21200));
  X_new['loan_amnt:21.2k-28.1k'] = Number((X['loan_amnt'] > 21200) && (X['loan_amnt'] <= 28100));
  X_new['loan_amnt:>28.1k'] = Number(X['loan_amnt'] > 28100);
  X_new['loan_int_rate:<8.98'] = Number((X['int_rate'] <= 8.98));
  X_new['loan_int_rate:12.54-16.1'] = Number((X['int_rate'] >= 12.54) && (X['int_rate'] <= 16.1));
  X_new['loan_int_rate:16.1-19.66'] = Number((X['int_rate'] >= 16.1) && (X['int_rate'] <= 19.66));
  X_new['loan_int_rate:>19.66'] = Number(X['int_rate'] > 19.66);
  X_new['loan_percent_income:<0.166'] = Number(X['loan_percent_income'] <= 0.166);
  X_new['loan_percent_income:0.332-0.498'] = Number((X['loan_percent_income'] >= 0.332) && (X['loan_percent_income'] <= 0.498));
  X_new['loan_percent_income:0.498-0.664'] = Number((X['loan_percent_income'] > 0.498) && (X['loan_percent_income'] <= 0.664));
  X_new['loan_percent_income:>0.664'] = Number(X['loan_percent_income'] > 0.664);
  X_new['loan_grade:G'] = Number(X['grade'] === 'G');

  return X_new;
};

export default transform;
