import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'danger'],
    },
    onClick: { action: 'clicked' },
  },
};

export const Primary = { args: { label: 'Primary', variant: 'primary' } };
export const Secondary = { args: { label: 'Secondary', variant: 'secondary' } };
export const Danger = { args: { label: 'Delete', variant: 'danger' } };
