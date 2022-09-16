export interface UserMetadata {
  [propName: string]: any;
}

export interface AppMetadata {
  [propName: string]: any;
}

export interface UserData<A = AppMetadata, U = UserMetadata> {
  email?: string | undefined;
  username?: string | undefined;
  email_verified?: boolean | undefined;
  verify_email?: boolean | undefined;
  user_id?: string | undefined;
  blocked?: boolean | undefined;
  nickname?: string | undefined;
  picture?: string | undefined;
  password?: string | undefined;
  phone_number?: string | undefined;
  phone_verified?: boolean | undefined;
  given_name?: string | undefined;
  family_name?: string | undefined;
  name?: string | undefined;
  user_metadata?: U | undefined;
  app_metadata?: A | undefined;
}
