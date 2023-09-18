import {ChoiceList} from '@shopify/polaris';
import {useState, useCallback} from 'react';

function ChoiceSection() {
  const [selected, setSelected] = useState(['hidden']);

  const handleChange = useCallback((value) => setSelected(value), []);

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
            label: 'Show Reviewers Photo',
            value: 'value-03'
          
           
          }, {
            label: 'Show Reviewers Name',
            value: 'value-04'
          
           
          }, {
          label: 'Show View All Reviews Link',
          value: 'value-05'
        
         
        },{
            label: 'Show Write a Review Button',
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

export default ChoiceSection;