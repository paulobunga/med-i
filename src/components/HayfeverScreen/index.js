/* eslint-disable react/prop-types */
import React from 'react';

import SymptomScreen from '../SymptomScreen';

const HayfeverScreen = () => {
  const otherProps = {
    symptomOne: 'Sneezing',
    symptomTwo: 'Coughing',
    symptomThree: 'Runny/Blocked nose',
    symptomFour: 'Itchy eyes',
    symptomFive: 'Tiredness',
    drugOne: 'Ceterizine',
    drugTwo: 'Loratidine',
    drugThree: 'Diphenhy-dramine',
    drugFour: 'Chlorphe-namine',
    drugFive: 'Fexofenadine',
  };
  return <SymptomScreen {...otherProps} />;
};

export default HayfeverScreen;
