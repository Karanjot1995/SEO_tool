import {PASSED , FAILED , WARNING, KEYWORDS, URL} from '../actions'

const initialState = {
  url:'',
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
  keyword: ""
  // stroke: 'rgb(230, 126, 34)'
}


function reducer (state = initialState , action) {
  
  switch(action.type) {
    case "URL" : 
      return Object.assign({},state,{
       
        url: action.url

      })
    case "PASSED":
      return Object.assign({},state,{
        passed: state.passed + 1,
        failed: state.failed,
        warnings: state.warnings,
        data: [{value: 10},
             {text: 'Passed Checks', value: (state.passed + 1)}, 
             {text: 'Failed Checks', value: (state.failed)},
             {text: 'Warnings', value: (state.warnings)},
          ],
        total: state.total + 1,
        
        // stroke: state.stroke
    });
    case "FAILED" :
      return Object.assign({},state,{
        passed: state.passed,
        failed: state.failed + 1,
        warnings: state.warnings,
        data: [{value: 10},
             {text: 'Passed Checks', value: (state.passed)}, 
             {text: 'Failed Checks', value: (state.failed + 1)},
             {text: 'Warnings', value: (state.warnings)},
          ],
        total: state.total + 1,

        // stroke: state.stroke
      })
      case "WARNING" :
        return Object.assign({},state,{
          passed: state.passed,
        failed: state.failed ,
        warnings: state.warnings + 1,
        data: [{value: 10},
             {text: 'Passed Checks', value: (state.passed)}, 
             {text: 'Failed Checks', value: (state.failed)},
             {text: 'Warnings', value: (state.warnings + 1)},
          ],
        total: state.total + 1,

        // stroke: state.stroke

      })
      case "KEYWORDS" : 
      return Object.assign({},state,{
       
        keyword: action.keyword1

      })
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
