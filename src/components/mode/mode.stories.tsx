import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Mode as ModeComponent } from "./mode";

export default {
  title: "Mode",
  component: ModeComponent,
  argTypes: {},
} as ComponentMeta<typeof ModeComponent>;

const Template: ComponentStory<typeof ModeComponent> = () => <ModeComponent />;

export const Mode = Template.bind({});
Mode.args = {};
