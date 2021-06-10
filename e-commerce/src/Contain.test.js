import React from 'react';
import { getByTestId, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';

import Contain from './Contain';

describe('測試Contain', () => {
  test('Contain是否成功渲染', () => {
    // const containTest = jest.fn();
    const container  = render(<Contain></Contain>)


    expect(container.childNodes).toHaveStyle('step_flow')
    expect(container.childNodes).toHaveClass('info')
  })
})