import {
  Thumbnail,
  Button,
  LegacyStack,
  Text,
  LegacyCard,
} from "@shopify/polaris";
import Footer from "./footer";
import Slider from "../Slider/Slidertwo";
import { AiFillStar } from "react-icons/ai";
import Preview from "./preview";
import review from "../review.json";

function Connect() {
  const dataone = review.company[0];
  

  return (
    <>
      <div className="section-text bg-body-tertiary p-3 border rounded-2">
        <LegacyStack>
          <LegacyStack.Item fill>
            <div className="d-flex">
              <div className="">
                
                <Thumbnail source={dataone.photo} alt="Black choker necklace" />
              </div>
              <div className="inline ms-3 ">
                <Text variant="headingMd" as="h2">
                 {dataone.title}
                </Text>
                <Text variant="headingMd" as="h2">
                  {dataone.location}
                </Text>
              </div>
            </div>
          </LegacyStack.Item>

          <LegacyStack.Item>
            <Button destructive>Delete</Button>
          </LegacyStack.Item>
        </LegacyStack>
      </div>
      <div className="section-text p-3 border mt-4 rounded-2">
        <LegacyStack>
          <LegacyStack.Item fill>
            <div className="d-flex">
              <div className="inline ms-1 ">
                <Text variant="headingMd" as="h2">
                  You can update reviews once in every 24 hour (Last Updated:
                  Not updated yet)
                </Text>
              </div>
            </div>
          </LegacyStack.Item>

          <LegacyStack.Item>
            <Button>Update</Button>
          </LegacyStack.Item>
        </LegacyStack>
      </div>

      <Preview />
      <Footer />
    </>
  );
}
export default Connect;
