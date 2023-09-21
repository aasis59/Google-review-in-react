import {ChoiceList} from '@shopify/polaris';
import {useState, useCallback,useContext} from 'react';
import { AppContext } from '../contextapi';



 export function ChoiceSection() {
  const {setUsers}=useContext(AppContext);
 
  const [selected, setSelected] = useState([]);

  const handleChange = useCallback((value) => 
    setSelected(value), 
  
  []);
  setUsers(selected);
 
  

  return (
   
     
    <ChoiceList
      allowMultiple
      
      choices={[ 
        {
          label: 'Hide Reviews without Comments',
          value: 'value-01'
        
         
        },
        {
          label: 'Hide Rating Text',
          value: 'value-02'
        
         
        }, {
            label: 'Hide Reviewers Photo',
            value: 'value-03'
          
           
          }, {
            label: 'Hide Reviewers Name',
            value: 'value-04'
          
           
          }, {
          label: ' Hide View All Reviews Link',
          value: 'value-05'
        
         
        },{
            label: 'Hide Write a Review Button',
            value: 'value-06'
          
           
          },
          {
            label: 'Auto Play',
            value: 'value-07'
          
           
          },

        
      ]}
      selected={selected}
      onChange={handleChange}
    /> 
  );
}

