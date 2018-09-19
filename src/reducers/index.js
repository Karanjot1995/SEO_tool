import {INCREMENT , FAILED} from '../actions'

const initialState = {
  passed : 0,
  failed: 0,
  warnings: 0,
  data: [{value: 10},
           {text: 'Passed Checks', value: 0}, 
           {text: 'Failed Checks', value: 0},
           {text: 'Warnings', value: 0},
        ],
}

function reducer (state = initialState , action) {
  switch(action.type) {
    case "INCREMENT":
      return {
        passed: state.passed + 1,
        failed: state.failed,
        warnings: state.warnings,
        data: [{value: 10},
             {text: 'Passed Checks', value: (state.passed + 1)}, 
             {text: 'Failed Checks', value: (state.failed)},
             {text: 'Warnings', value: (state.warnings)},
          ],
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
      }
    default:
    return state;
  }
};

export default reducer
