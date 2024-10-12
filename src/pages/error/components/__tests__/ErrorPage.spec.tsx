import { renderHook, screen } from '@testing-library/react';
import { vi } from 'vitest';

import render from '@/utils/test/render';
import { ErrorPage } from '../ErrorPage';
import fireEvent from '@testing-library/user-event';

// 실제 모듈을 모킹한 모듈로 대체하여 테스트 실행 (react-router-dom의 useNavigate 모킹)
const navigateFn = vi.fn(); // 모킹 : 테스트하고자 하는 코드가 의존하는 function, class에 대해 모조품을 만들어 대체하는 기법
vi.mock('react-router-dom', async () => {
  const original = await vi.importActual('react-router-dom');
  return { ...original, useNavigate: () => navigateFn };
});

it('"뒤로 이동" 버튼 클릭시 뒤로 이동하는 navigate(-1) 함수가 호출된다', async () => {
  // Arrange: ErrorPage 컴포넌트를 렌더링
  const { user } = await render(<ErrorPage />);

  // Act: "뒤로 이동" 버튼을 클릭
  const button = screen.getByText('뒤로 이동');
  await fireEvent.click(button);

  // Assert: navigate 함수가 -1 인자로 호출되었는지 확인
  expect(navigateFn).toHaveBeenCalledWith(-1);
});
