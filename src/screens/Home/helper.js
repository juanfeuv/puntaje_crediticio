import _ from 'lodash';

import moment from 'moment';
import React from 'react';

import {
  FaDollarSign, FaCalendarAlt, FaBusinessTime, FaPercent, FaHouseUser, FaCheckCircle, FaHandshake, FaScroll, FaDivide, FaMoneyBillAlt
} from "react-icons/fa";

const currentDate = moment().format('YYYY-MM-DD');

export const DEFAULT_FORM = {
  verification_status: 'NOT_VERIFIED',
  purpose: 'CAR',
  grade: 'A',
  home_ownership: 'MORTGAGE',
};

export const DICT_FIELDS = [
  {
    field: 'age',
    placeholder: 'Edad del solicitante',
    lectura: 'Edad del solicitante',
    type: 'number',
    min: 0,
    max: 100,
    inputGroupPrepend: <FaBusinessTime />,
  },
  {
    field: 'int_rate',
    placeholder: 'Tasa de interés',
    lectura: 'Tasa interés',
    type: 'number',
    min: 0,
    inputGroupPrepend: <FaPercent />,
  },
  {
    field: 'grade',
    placeholder: 'Nota crediticia asignada',
    lectura: 'Nota crediticia',
    type: 'select',
    inputGroupPrepend: <FaScroll />,
    options: [
      {
        value: 'A',
        label: 'A',
      },
      {
        value: 'B',
        label: 'B',
      },
      {
        value: 'C',
        label: 'C',
      },
      {
        value: 'D',
        label: 'D',
      },
      {
        value: 'E',
        label: 'E',
      },
      {
        value: 'F',
        label: 'F',
      },
      {
        value: 'G',
        label: 'G',
      },
    ]
  },
  {
    field: 'home_ownership',
    placeholder: 'Estado de propiedad de vivienda',
    lectura: 'Propiedad vivienda',
    type: 'select',
    inputGroupPrepend: <FaHouseUser />,
    options: [
      {
        value: 'MORTGAGE',
        label: 'HIPOTECA',
      },
      {
        value: 'NONE',
        label: 'NINGUNA',
      },
      {
        value: 'OTHER',
        label: 'OTRA',
      },
      {
        value: 'OWN',
        label: 'PROPIA',
      },
      {
        value: 'RENT',
        label: 'RENTADA',
      },
    ]
  },
  {
    field: 'annual_inc',
    placeholder: 'Ganancias anuales en dólares (ejemplo. $100000)',
    lectura: 'Ganancia anual (ejemplo. $100000)',
    type: 'number',
    min: 0,
    inputGroupPrepend: <FaDollarSign />,
  },
  {
    field: 'experience',
    placeholder: 'Meses del empleo',
    lectura: 'Tiempo del empleo (meses)',
    type: 'number',
    min: 0,
    inputGroupPrepend: <FaHandshake />,
  },
  {
    field: 'purpose',
    placeholder: 'Motivo por el cual se hace el préstamo',
    lectura: 'Motivo prestamo',
    type: 'select',
    inputGroupPrepend: <FaHandshake />,
    options: [
      {
        value: 'CAR',
        label: 'CARRO',
      },
      {
        value: 'CREDIT_CARD',
        label: 'TARJETA DE CREDITO',
      },
      {
        value: 'DEBT_CONSOLIDATION',
        label: 'CONSOLIDACION DE UN DEBITO',
      },
      {
        value: 'EDUCATIONAL',
        label: 'EDUCACIONAL',
      },
      {
        value: 'HOME_IMPROVEMENT',
        label: 'MEJORAS PARA LA CASA',
      },
      {
        value: 'HOUSE',
        label: 'CASA',
      },
      {
        value: 'MAJOR_PURCHASE',
        label: 'COMPRA DE ALTO COSTO',
      },
      {
        value: 'MEDICAL',
        label: 'MEDICO',
      },
      {
        value: 'MOVING',
        label: 'MUDANZA',
      },
      {
        value: 'OTHER',
        label: 'OTRA',
      },
      {
        value: 'RENEWABLE_ENERGY',
        label: 'RENOVACION ELECTRICA',
      },
      {
        value: 'SMALL_BUSINESS',
        label: 'PEQUENO NEGOCIO',
      },
      {
        value: 'VACATION',
        label: 'VACACIONES',
      },
      {
        value: 'WEDDING',
        label: 'BODA',
      },
    ]
  },
  {
    field: 'loan_percent_income',
    placeholder: 'Porcentaje del ingreso destinado al préstamo (ejemplo. 0.3)',
    lectura: 'Porcentaje del ingreso destinado al préstamo (ejemplo. 0.3)',
    type: 'number',
    min: 0,
    inputGroupPrepend: <FaDivide />,
  },
  {
    field: 'loan_amnt',
    placeholder: 'Monto a prestar',
    lectura: 'Monto a prestar',
    type: 'number',
    inputGroupPrepend: <FaDollarSign />,
  },
];

export const MATRIZ_COHEFICIENTES = {
    "Intercept": 598,
    "loan_grade:A": -96,
    "loan_grade:B": -96,
    "loan_grade:C": -84,
    "loan_grade:D": -13,
    "loan_grade:E": -3,
    "loan_grade:F": 3,
    "person_home_ownership:OWN": -54,
    "person_home_ownership:OTHER_RENT": 28,
    "loan_intent:DEBTCONSOLIDATION": 21,
    "loan_intent:HOMEIMPROVEMENT": 28,
    "loan_intent:MEDICAL": 18,
    "loan_intent:PERSONAL": 7,
    "loan_intent:VENTURE": -16,
    "person_age:<36.0": -18,
    "person_age:36.0-52.0": -24,
    "person_age:>68.0": -49,
    "person_income:163k-322k": 0,
    "person_income:322k-482k": -17,
    "person_income:482k-641k": 4,
    "person_income:>641k": 0,
    "person_emp_length:6.2": 6,
    "person_emp_length:6.2-12.4": 5,
    "person_emp_length:18.6-24.8": 14,
    "person_emp_length:>24.8": -1,
    "loan_amnt:<7.4k": 23,
    "loan_amnt:14.3k-21.2k": -8,
    "loan_amnt:21.2k-28.1k": -11,
    "loan_amnt:>28.1k": -16,
    "loan_int_rate:<8.98": -17,
    "loan_int_rate:12.54-16.1": 3,
    "loan_int_rate:16.1-19.66": 1,
    "loan_int_rate:>19.66": 39,
    "loan_percent_income:<0.166": -41,
    "loan_percent_income:0.332-0.498": 89,
    "loan_percent_income:0.498-0.664": 103,
    "loan_percent_income:>0.664": 97,
};

export const isDisabledCalculate = (form) => {
  const newForm = DICT_FIELDS.reduce((accum, item) => ({ ...accum, [item.field]: undefined }), {});

  _.assign(newForm, form);

  return _.some(newForm, (item) => _.isEmpty(item));
};
