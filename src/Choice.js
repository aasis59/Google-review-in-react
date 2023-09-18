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
        
         
        },
        {
          label: 'Hide Rating Text',
        
         
        }, {
            label: 'Show Reviewers Photo',
          
           
          }, {
            label: 'Show Reviewers Name',
          
           
          }, {
          label: 'Show View All Reviews Link',
        
         
        },{
            label: 'Show Write a Review Button',
          
           
          },
          {
            label: 'Auto Play',
          
           
          },

        
      ]}
      selected={selected}
      onChange={handleChange}
    />
  );
}

export default ChoiceSection;