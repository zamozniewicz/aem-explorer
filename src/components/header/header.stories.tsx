import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Header as HeaderComponent } from "./header";

export default {
  title: "Header",
  component: HeaderComponent,
  argTypes: {},
} as ComponentMeta<typeof HeaderComponent>;

const Template: ComponentStory<typeof HeaderComponent> = () => (
  <HeaderComponent />
);

export const Header = Template.bind({});
Header.args = {};
