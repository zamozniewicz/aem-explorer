import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Footer as FooterComponent } from "./footer";

export default {
  title: "Footer",
  component: FooterComponent,
  argTypes: {},
} as ComponentMeta<typeof FooterComponent>;

const Template: ComponentStory<typeof FooterComponent> = () => (
  <FooterComponent />
);

export const Footer = Template.bind({});
Footer.args = {};
