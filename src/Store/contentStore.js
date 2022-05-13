import React, {createContext, useReducer} from 'react';

const stateModal = {
    novels : [],
    poems : [],
    worlds : [],
    shorts : [],
    configs : {}
    
  }
  
  const initialState = {...stateModal};

  const Store = createContext(initialState);

  const { Provider } = Store;


const StateProvider = ( { children } ) => {
    const [state, dispatch] = useReducer((state, action) => {
      let newState = {}
      switch(action.type) {
        case 'initNovels':
          newState = {...state, novels : [ ...action?.payload] }
          return newState;
        case 'initPoems':
          newState = {...state, poems : [ ...action?.payload] }
          return newState;
        case 'initWorlds':
          newState = {...state, worlds : [ ...action?.payload] }
          return newState;
        case 'initPoems':
          newState = {...state, poems : [ ...action?.payload] }
          return newState;
        case 'initShorts':
          newState = {...state, shorts : [ ...action?.payload] }
          return newState;
        case 'initConfigs':
          newState = {...state, configs : {...action?.payload} }
          return newState;
        case 'clearState' :
          return {  ...stateModal  }
        default:
          throw new Error();
      };
    }, initialState);
  
    return <Provider value={{ state, dispatch }}>{children}</Provider>;
  };
  

  export { Store , StateProvider }