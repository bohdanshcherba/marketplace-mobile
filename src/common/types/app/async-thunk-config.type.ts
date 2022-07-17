import {extraArgument, store} from '../../../store/store';

type AppDispatch = typeof store.dispatch;
type RootState = ReturnType<typeof store.getState>;

type AsyncThunkConfig = {
  state: RootState;
  dispatch: AppDispatch;
  extra: typeof extraArgument;
};

export {type AsyncThunkConfig};
