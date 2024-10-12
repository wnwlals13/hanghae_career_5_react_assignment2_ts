import { screen } from '@testing-library/react';

import customRender from '@/utils/test/render';
import { EmptyNotice } from '../EmptyNotice';
import fireEvent from '@testing-library/user-event';

const navigateFn = vi.fn(); // 모킹 : 테스트하고자 하는 코드가 의존하는 function, class에 대해 모조품을 만들어 대체하는 기법
vi.mock('react-router-dom', async () => {
  const original = await vi.importActual('react-router-dom');
  return { ...original, useNavigate: () => navigateFn };
});

it('"홈으로 가기" 링크를 클릭할 경우 "/" 경로로 navigate 함수가 호출된다', async () => {
  // Arrange: EmptyNotice 컴포넌트를 렌더링
  const { user } = await customRender(<EmptyNotice />);

  // Act: "홈으로 가기" 텍스트를 가진 요소를 클릭
  const link = screen.getByRole('button', { name: '홈으로 가기' });
  await fireEvent.click(link);

  // Assert: navigate 함수가 '/' 경로로 호출되었는지 확인
  expect(navigateFn).toHaveBeenCalledWith('/');
});
