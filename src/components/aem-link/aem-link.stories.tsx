import { ComponentMeta, ComponentStory } from "@storybook/react";
import { AemLink as AemLinkComponent, AemLinkProps } from "./aem-link";

export default {
  title: "Aem Link",
  component: AemLinkComponent,
  argTypes: {},
} as ComponentMeta<typeof AemLinkComponent>;

const Template: ComponentStory<typeof AemLinkComponent> = (
  args: AemLinkProps
) => <AemLinkComponent {...args} />;

export const AemLink = Template.bind({});
AemLink.args = {
  text: "PackMgr",
  pathname: "/content/en.html",
};
