import { LegacyCard, LegacyTabs} from "@shopify/polaris";
import { useState, useCallback } from "react";

import Connect from "./Connect";
import LayoutSetting from "./layout-setting";
import Preview from "./preview";
import Instal from "./installation";
import Template from "./template-layout";

function Home() {
  const [selected, setSelected] = useState(0);

  const handleTabChange = useCallback(
    (selectedTabIndex) => setSelected(selectedTabIndex),
    []
  );

  const tabs = [
    {
      id: "all-customers-1",
      content: "Connect Google Platform",
      
    },
    {
      id: "accepts-marketing-1",
      content: "Layout Template",
      panelID: "accepts-marketing-content-1",
    },
    {
      id: "repeat-customers-1",
      content: "Layout Setting",
      panelID: "repeat-customers-content-1",
    },
    {
      id: "prospects-1",
      content: "Installation",
      panelID: "prospects-content-1",
    },
  ];

  return (
    <div>
      <LegacyCard>
        <LegacyTabs tabs={tabs} selected={selected} onSelect={handleTabChange}>
          <LegacyCard.Section>
           
            {selected===0 && <Connect />}
            {selected===1 && <Template />}
            {selected===2&&<LayoutSetting/>}
            {selected===3&&<Instal/>}


          </LegacyCard.Section>
          
        </LegacyTabs>
        
      </LegacyCard>
      
      
      

     
    </div>
  );
}
export default Home;
