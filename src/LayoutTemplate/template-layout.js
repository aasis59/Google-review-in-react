
import PreviewOne from "./PreviewOne";
import PreviewThree from "./PreviewThree";
import PreviewTwo from "./PreviewTwo";
import { Text,Divider } from "@shopify/polaris";

function Template() {
  return (<><div>
        <div>
        <Text variant="headingLg" as="h2">
        1.Review with Badge-I
      </Text>
        </div>
      <PreviewOne/>
     <Divider borderColor="border" />
    </div>
  <div className="mt-3">
  <div>
        <Text variant="headingLg" as="h2">
        2.Review with Badge-II
      </Text>
        </div>
      <PreviewTwo/>
      
     <Divider borderColor="border" />
     
  </div>

  <div className="mt-3">
    <div >
  <Text variant="headingLg" as="h2">
        3.Review with Badge-III
      </Text>
        </div>
      <PreviewThree/>
      
     <Divider borderColor="border" /> 
     
  </div>
    

     

     </>
    
  );
}
export default Template;
