import { Text, LegacyCard, LegacyStack, Button } from "@shopify/polaris";
import Preview from "../Connect/preview";
import FromSection from "./layout-setting-form";
function LayoutSetting() {
  return (
    <>
      <Preview/>

      <div className="section-slider-form mt-5 border-bottom border-dark pb-4">
        <LegacyStack>
          <LegacyStack.Item fill>
            <Text variant="headingMd" as="h2">
              Widgets Settings
            </Text>
          </LegacyStack.Item>
          <LegacyStack.Item>
            <Button>Reset to default</Button>
          </LegacyStack.Item>
          <LegacyStack.Item>
            <Button primary>Update</Button>
          </LegacyStack.Item>
        </LegacyStack>
      
      </div>

      <FromSection/>

     
    </>
  );
}
export default LayoutSetting;
