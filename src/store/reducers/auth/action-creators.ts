import axios from "axios";
import { AppDispatch } from "../..";
import { IUser } from "../../../models/IUser";
import { AuthActionsEnum, SetAuthAction, SetErrorAction, SetIsLoadingAction, SetUserAction } from "./types";

export  const AuthActionCreators = {
      setUser: (user: IUser): SetUserAction => ({type: AuthActionsEnum.SET_USER, payload: user}),
      setIsAuth: (auth: boolean): SetAuthAction => ({type: AuthActionsEnum.SET_AUTH, payload: auth}),
      setIsLoading: (payload: boolean): SetIsLoadingAction => ({type: AuthActionsEnum.SET_IS_LOADING, payload}),
      setError: (payload: string): SetErrorAction => ({type: AuthActionsEnum.SET_ERROR, payload}),
      login: (username: string, password: string) => async (dispatch: AppDispatch) => {
            try {
                  dispatch(AuthActionCreators.setIsLoading(true));
                  setTimeout(async () => {

                        localStorage.setItem('auth', 'true')
                        localStorage.setItem('username', 'admin')
                        dispatch(AuthActionCreators.setIsAuth(true))
                        dispatch(AuthActionCreators.setUser({'username': 'admin', 'password': '123'}))
                        dispatch(AuthActionCreators.setIsLoading(false))
                  }, 1000)
            } catch (e) {
                  dispatch(AuthActionCreators.setError('Произошла ошибка при логине'))
            }
      }
}