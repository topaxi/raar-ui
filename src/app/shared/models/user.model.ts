import {CrudModel} from './crud.model';

export class UserModel extends CrudModel {

  public attributes: {
    username: string;
    first_name: string;
    last_name: string;
    groups: string[];
    api_token: string;
    api_key_expires_at: Date;
    admin: boolean;
  }

}
