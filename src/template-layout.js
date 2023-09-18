import Preview from "./preview";
import { Text,Divider } from "@shopify/polaris";

function Template() {
  return (<><div>
        <div>
        <Text variant="headingLg" as="h2">
        1.Review with Badge-I
      </Text>
        </div>
      <Preview />
     
    </div>
     <Divider borderColor="border" />
     
     </>
    
  );
}
export default Template;
