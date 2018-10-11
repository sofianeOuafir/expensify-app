import { authReducer } from '../../reducers/auth';

test('it should setup default value', () => {
  const state = authReducer(undefined, {
    type: '@@INIT'
  });
  expect(state).toEqual({});
});

test('should handle login action', () => {
  const uid = 'dffxa`sddgfds';
  const state = authReducer({}, {
    type: 'LOGIN',
    uid
  });
  expect(state).toEqual({
    uid
  });
});

test('should handle logout action', () => {
  const state = authReducer({ uid: 'fdsddsxzd' }, {
    type: 'LOGOUT'
  });
  expect(state).toEqual({});
});