import { LegacyStack, Text, Button } from "@shopify/polaris";
function Instal() {
  return (
    <div className="bg-body-tertiary p-3 border rounded-2">
      <LegacyStack spacing="loose">
        <Text variant="heading3xl" as="h2">
          Setup your widget directly to your store
        </Text>
        <Button primary>Setup</Button>;
      </LegacyStack>
      <div className=" text-center mt-5">
        <iframe
          width="70%"
          height="400"
          src="https://www.youtube.com/embed/EtW4evOuEB8"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen=""
        ></iframe>
      </div>
    </div>
  );
}
export default Instal;
