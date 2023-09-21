import { Page, Grid, LegacyCard, Select } from "@shopify/polaris";
import { useState, useCallback } from "react";
import './layout.scss';
import {ChoiceSection} from "./Choice";

function FromSection() {
  const [selected, setSelected] = useState("today");

  const handleSelectChange = useCallback(
    (value) => setSelected(value),
    []
  );

  const RatingsOptions = [
    { label: "1 Star", value: "1star" },
    { label: "2 Star", value: "2star" },
    { label: "3 Star", value: "3star" },
    { label: "4 Star", value: "4star" },
    { label: "5 Star", value: "5star" },
  ];

  const DateOptions = [
    { label: "Month Year", value: "my" },
    { label: "Year Month Day", value: "ymd" },
    { label: "Month Day Year", value: "mdy" },
    { label: "Hide", value: "hide" },
  ];

  const AlignOptions = [
    { label: "Left", value: "left" },
    { label: "Center", value: "center" },
    { label: "Right", value: "right" },
  ];
  
  const ThemeOptions = [
    { label: "Light", value: "light" },
    { label: "Dark", value: "dark" },
    { label: "Transparent", value: "transparent" },
    { label: "Custom", value: "custom" }
  ];
  return (
    <div className="main-section">
      <Page fullWidth>
        <Grid>
          <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
            <div className="form-section">
             <Select
                label="Minimum Rating"
                options={RatingsOptions}
                onChange={handleSelectChange}
                value={selected}
                />
              
              
            
                <Select
                label="Select Date format"
                options={DateOptions }
                onChange={handleSelectChange}
                value={selected}
              />
               
                 <Select
                label="Align"
                options={AlignOptions}
                onChange={handleSelectChange}
                value={selected}
              />
               
              
                <Select
                label="Theme"
                options={ThemeOptions}
                onChange={handleSelectChange}
                value={selected}
              />
              
               
            </div>
          </Grid.Cell>
          <Grid.Cell
            columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}
          >
            <div className="text-start ms-5"><ChoiceSection/></div>
          </Grid.Cell>
        </Grid>
      </Page>
    </div>
  );
}

export default FromSection;
