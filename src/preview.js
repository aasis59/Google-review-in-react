import {
    Thumbnail,
    Button,
    LegacyStack,
    Text,
    LegacyCard,
  } from "@shopify/polaris";
  import Footer from "./footer";
  import Slider from "./slider";
  import { AiFillStar } from "react-icons/ai";

function Preview()
{
    return(
    <>
<div className=" section-slider mt-4 border p-5 ">
        <div className="mt-2">
          <Text variant="heading2xl" as="h2">
            Preview
          </Text>
        </div>
        <div className="mt-5">
          <div className="row">
            <div className="col-3 d-flex justify-content-center align-items-center">
              <div className="inline">
                <Thumbnail
                  source="data:image/jpeg;base64,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"
                  alt="Black choker necklace"
                />
              </div>
              <div className="flex-column ms-3">
                <Text variant="headingMd" as="h2">
                  Nerd Platoon Pvt. Ltd
                </Text>
                <AiFillStar color="gold" size={30} />
                <AiFillStar color="gold" size={30} />
                <AiFillStar color="gold" size={30} />
                <AiFillStar color="gold" size={30} />
                <AiFillStar color="gold" size={30} />

                <Text variant="headingSm" as="h2">
                  18 Google reviews
                </Text>
              </div>
            </div>
            <div className="col-9">
              <Slider />
            </div>
          </div>
        </div>
      </div>

    </>
    );


}
export default Preview;