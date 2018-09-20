import {PASSED , FAILED , WARNING} from '../actions'

const initialState = {
  score: 0,
  passed : 0,
  failed: 0,
  warnings: 0,
  data: [{value: 10},
           {text: 'Passed Checks', value: 0}, 
           {text: 'Failed Checks', value: 0},
           {text: 'Warnings', value: 0},
        ],

  total: 0,
  stroke: 'rgb(230, 126, 34)'
}

function reducer (state = initialState , action) {
  switch(action.type) {
    case "PASSED":
      return {
        passed: state.passed + 1,
        failed: state.failed,
        warnings: state.warnings,
        data: [{value: 10},
             {text: 'Passed Checks', value: (state.passed + 1)}, 
             {text: 'Failed Checks', value: (state.failed)},
             {text: 'Warnings', value: (state.warnings)},
          ],
        total: state.total + 1,
        stroke: state.stroke
    };
    case "FAILED" :
    return {
        passed: state.passed,
        failed: state.failed + 1,
        warnings: state.warnings,
        data: [{value: 10},
             {text: 'Passed Checks', value: (state.passed)}, 
             {text: 'Failed Checks', value: (state.failed + 1)},
             {text: 'Warnings', value: (state.warnings)},
          ],
        total: state.total + 1,
        stroke: state.stroke
      }
      case "WARNING" :
      return {
        passed: state.passed,
        failed: state.failed ,
        warnings: state.warnings + 1,
        data: [{value: 10},
             {text: 'Passed Checks', value: (state.passed)}, 
             {text: 'Failed Checks', value: (state.failed)},
             {text: 'Warnings', value: (state.warnings + 1)},
          ],
        total: state.total + 1,
        stroke: state.stroke

      }
      /*case "TOTAL" :
      return {
        passed: state.passed,
        failed: state.failed ,
        warnings: state.warnings,
        total: passed + failed + warnings
      }*/
    default:
    return state;
  }
};

export default reducer
