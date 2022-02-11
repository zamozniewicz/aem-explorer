import { ComponentMeta, ComponentStory } from "@storybook/react";

import { CurrentPageMode as CurrentPageModeComponent } from "./current-page-mode";

export default {
  title: "Current Page Mode",
  component: CurrentPageModeComponent,
  argTypes: {},
} as ComponentMeta<typeof CurrentPageModeComponent>;

const Template: ComponentStory<typeof CurrentPageModeComponent> = () => (
  <CurrentPageModeComponent />
);

export const CurrentPageMode = Template.bind({});
CurrentPageMode.args = {};
