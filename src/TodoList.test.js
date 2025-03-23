import { render, screen } from '@testing-library/react';
import { TodoList } from './TodoList';

test('renders No task found when the list is empty', () => {
  render(<TodoList />);
  const linkElement = screen.getByText(/No task found/i);
  expect(linkElement).toBeInTheDocument();
});