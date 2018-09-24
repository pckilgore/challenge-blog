# Groundbreaker's jr-eng-project

_by_ Patrick Kilgore

## Development

```bash
$ yarn install
$ yarn start
```

## Production

```bash
$ yarn install
$ yarn deploy
```

## Test

```bash
$ yarn test
(optional)
$ yarn test --coverage
```

### With more time...

-   Abstract the posts form into a HOC to do editing/adding
-   Editing posts, including setting DRAFT->Published (currently can only view drafts on the add post page)
-   Pagination
-   Backend Testing
-   More incremental loading
    -   `/`: Just titles / authors / status / lastUpdated / imageUrl
    -   `/post/:id`: load in content / comments for that :id
