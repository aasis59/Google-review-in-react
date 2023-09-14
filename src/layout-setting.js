import { Text, LegacyCard, LegacyStack, Button } from "@shopify/polaris";
function LayoutSetting() {
  return (
    <>
      <div className=" section-slider mt-4 border ">
        <div className="mt-2">
          <Text variant="heading2xl" as="h2">
            Preview
          </Text>
        </div>
        <div className="mt-5">
          <LegacyCard></LegacyCard>
        </div>
      </div>

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
      <div className="section-form mt-5">
          <div className="container">
<div className="row">
    <div className="col">sadf</div>
    <div className="col">asfas</div>
    </div>          
          </div>
        </div>
    </>
  );
}
export default LayoutSetting;
