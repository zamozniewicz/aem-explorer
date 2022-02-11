import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Links as LinksComponent } from "./links";

export default {
  title: "Links",
  component: LinksComponent,
  argTypes: {},
} as ComponentMeta<typeof LinksComponent>;

const Template: ComponentStory<typeof LinksComponent> = () => (
  <LinksComponent />
);

export const Links = Template.bind({});
Links.args = {};
