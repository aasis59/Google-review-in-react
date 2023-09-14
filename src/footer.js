import { LegacyCard, List } from "@shopify/polaris";

function Footer() {
  return (
  <div className="border mt-4 rounded-2">
      <LegacyCard title="Setup Instructions:" sectioned subdued>
      <List type="number">
        <List.Item>
          Start by entering your Google Business name, or domain in the search
          bar. The list of results based on your search will be displayed. Or
          connect your Google Business using Google Map URL. You can use Google
          Maps to find your Business.
        </List.Item>
        <List.Item>
          Choose your desired account from the list and connect it. Once
          connected, you will see a default preview of the reviews.
        </List.Item>
        <List.Item>
          To customize the layout and settings, navigate to the "Layout
          Template" and "Layout Settings" sections.
        </List.Item>
        <List.Item>
          If you want to add reviews to your store, go to the "Installation" tab
          and click on the setup button. This will take you to the customization
          page.
        </List.Item>
        <List.Item>
          On the customization page, click on the "Add" section and select
          "Google Review" from the options. You will be able to preview the
          changes. Don't forget to save the changes to publish them on your
          store.
        </List.Item>
      </List>
    </LegacyCard>

  </div>
  );
}

export default Footer;
