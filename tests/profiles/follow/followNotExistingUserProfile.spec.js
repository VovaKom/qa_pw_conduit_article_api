import { test } from '../../_fixtures/fixtures';

test(`Follow profile for not existing user by other user`, async ({
  registeredUser,
  profilesApi,
}) => {
  const notExistingUser = {
    username: 'not-existing-user',
  };

  const response = await profilesApi.followProfile(notExistingUser.username);

  await profilesApi.assertNotFoundResponseCode(response);
});