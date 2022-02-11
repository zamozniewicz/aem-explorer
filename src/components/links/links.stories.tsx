import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Links as LinksComponent, LinksProps } from "./links";

export default {
  title: "Links",
  component: LinksComponent,
  argTypes: {},
} as ComponentMeta<typeof LinksComponent>;

const Template: ComponentStory<typeof LinksComponent> = (args: LinksProps) => (
  <LinksComponent {...args} />
);

const groupWithTitle = {
  title: "Group title",
  id: "group-with-title",
  links: [
    { pathname: "/path/1", label: "First link" },
    { pathname: "/path/2", label: "Second link" },
  ],
};

const groupWithoutTitle = {
  id: "group-without-title",
  links: [
    { pathname: "/path/1", label: "First link" },
    { pathname: "/path/2", label: "Second link" },
    { pathname: "/path/3", label: "Third link" },
  ],
};

export const GroupWithTitle = Template.bind({});
GroupWithTitle.args = {
  linksGroups: [groupWithTitle],
};

export const GroupWithoutTitle = Template.bind({});
GroupWithoutTitle.args = {
  linksGroups: [groupWithoutTitle],
};

export const MultipleGroups = Template.bind({});
MultipleGroups.args = {
  linksGroups: [groupWithoutTitle, groupWithTitle],
};
