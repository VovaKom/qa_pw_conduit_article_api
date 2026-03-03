import { EMPTY_ARTICLE_BODY } from '../../../src/constants/authErrorMessages';
import { test } from '../../_fixtures/fixtures';

test('Create article with empty body', async ({
  registeredUser,
  articleWithoutTags,
  articlesApi,
}) => {
  articleWithoutTags['body'] = '';

  const response = await articlesApi.createArticle(
    articleWithoutTags,
    registeredUser.token,
  );

  await articlesApi.assertSuccessResponseCode(response);
  await articlesApi.assertTitle(response, articleWithoutTags.title);
  await articlesApi.assertDescription(
    response,
    articleWithoutTags.description
  );
  await articlesApi.assertBody(response, articleWithoutTags.body);
});