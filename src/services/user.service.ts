import {
  userSignInRequest,
  userSignInResponse,
  userSignUpRequest,
  userSignUpResponse,
} from '../common/types/types';

const url = 'https://marketplace-rest.azurewebsites.net/api/Auth';

class User {
  public signIn(data: userSignInRequest): Promise<userSignInResponse> {
    return fetch(`${url}/login`, {
      method: 'POST',

      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    }).then(res => res.json());
  }

  public signUp(data: userSignUpRequest): Promise<userSignUpResponse> {
    return fetch(`${url}/register`, {
      method: 'POST',

      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    }).then(res => res.json());
  }

  public getCurrentUser(token: string): Promise<userSignUpResponse> {
    return fetch(`${url}/authenticated-user`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        authorization: `Bearer ${token}`,
      },
    }).then(res => res.json());
  }
}

export {User};
