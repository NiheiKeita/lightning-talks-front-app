import { Meta, StoryObj } from '@storybook/react';
import { CommentCreateView } from '.';


const meta: Meta<typeof CommentCreateView> = {
  title: 'views/CommentCreateView',
  component: CommentCreateView,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  play: async () => {
    // const button = await within(canvasElement).findByTestId('button');
    // expect(button).toBeInTheDocument();
    // expect(within(canvasElement).queryByTestId('countText')?.innerHTML).toBe("0");
    // await userEvent.click(button);
    // expect(within(canvasElement).queryByTestId('countText')?.innerHTML).toBe("1");
  },
};