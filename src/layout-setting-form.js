import { Page, Grid, LegacyStack, Text, Select,Badge, ChoiceList } from '@shopify/polaris';
import { useState, useCallback } from 'react';

import ChoiceSection from './Choice';

function FromSection() {
  const [selected, setSelected] = useState('newestUpdate');
  const handleSelectChange = useCallback(
    (value) => setSelected(value),
    [],
  );
  
  const options = [
    { label: '1 Star', value: 'newestUpdate' },
    { label: '2 Star', value: 'oldestUpdate' },
    { label: '3 Star', value: 'mostSpent' },
    { label: '4 Star', value: 'mostOrders' },
    { label: '5 Star', value: 'lastNameAlpha' },
   
  ];
  return (
    <Page fullWidth>
      <Grid>
        <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
        <div className='mt-4'>
        <LegacyStack >
        <Text variant="headingMd" as="h2">
        Minimum Rating
      </Text>
    <div style={{marginLeft:'100px'}}>
        <Select
      label="Sort by"
      labelInline
      options={options}
      onChange={handleSelectChange}
      value={selected}
    />

    </div>
      
    </LegacyStack>
        </div>
        <div className='mt-4'>
        <LegacyStack >
        <Text variant="headingMd" as="h2">
        Select Date format
      </Text>
    <div style={{marginLeft:'90px'}}>
        <Select
      label="Sort by"
      labelInline
      options={options}
      onChange={handleSelectChange}
      value={selected}
    />

    </div>
      
    </LegacyStack>
        </div>
        <div className='mt-4'>
        <LegacyStack >
        <Text variant="headingMd" as="h2">
        Align
      </Text>
    <div style={{marginLeft:'186px'}}>
        <Select
      label="Sort by"
      labelInline
      options={options}
      onChange={handleSelectChange}
      value={selected}
    />

    </div>
      
    </LegacyStack>
        </div>
        <div className='mt-4'>
        <LegacyStack >
        <Text variant="headingMd" as="h2">
        Theme
      </Text>
    <div style={{marginLeft:'170px'}}>
        <Select
      label="Sort by"
      labelInline
      options={options}
      onChange={handleSelectChange}
      value={selected}
    />

    </div>
      
    </LegacyStack>
        
    
   
        </div>
        </Grid.Cell>
        <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
          <div className='d-flex justify-content-center'>
          <ChoiceSection/>
          </div>
         
        </Grid.Cell>
      </Grid>
    </Page>
  );
}


export default FromSection;







