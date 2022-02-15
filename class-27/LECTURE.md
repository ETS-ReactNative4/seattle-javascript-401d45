# Class 27: useState

## Warm Up (40 mins)

```text
Today we are creating a feature called `History` which tracks URLs that a user enters into an input in our application.   When `History` is used, URLs are stored for later, and we want to be able to go backwards and forwards as more URLs are added.  When `History` goes backwards, the most recent URL to be visited is retrieved.   `History` also needs to go `forwards`, retrieving URLs that have recently been retrieved from going `backwards`.  How would you implement the `History` feature?
```

- Thanks Andrew!!

## Review: React Function Components (40 mins)

- How was the lab?
- What the difference between a class and a function component?
  - function component just a function returns JSX.
  - Class doesn't "only" return JSX.
    - Classes represent object.
      - Encapsulate more than just the ability to return JSX.
      - We can define other types of functionality.
- How do we make up for the lack of functionality attached to our components?
  - Hooks!!
  - "hook" into the React API.
    - Why is this so important?
    - We need to be mindful of state tracked by React / we don't get updated to our rendered JSX.

## useState / Hooks (50 mins)

## Deployment / Testing Automation (30 mins)

In order to automate deployments to GH-pages we want to do a couple things

1. Install the gh-pages npm package to the project you want to deploy: `npm install gh-pages`
1. Add 2 `scripts` to your package.json file:

    ```json
      "predeploy": "npm run build",
      "deploy": "gh-pages -d build"
    ```

1. Add the github action to run your deploy script on push:

    ```yml
    # .github/workflows/react-deploy.yml
    name: Deploy React App
    on:
      push
    jobs:
      build:
        runs-on: ubuntu-latest
        strategy:
          matrix:
            node-version: [10.x]
        steps:
        - uses: actions/checkout@v1
        - name: Use Node.js ${{ matrix.node-version }}
          uses: actions/setup-node@v1
          with:
            node-version: ${{ matrix.node-version }}
        - name: Deploy to GH Pages
          run: |
            git config --global user.name "${{ github.actor }}"
            git remote set-url origin https://${{ secrets.PERSONAL_TOKEN }}@github.com/${{ github.repository }}.git
            npm install
            npm run deploy
      ```

1. Create a Personal Access Token and add it to your project repository `secrets`:

- Go to github > User Settings > Developer Settings > Personal Access Tokens
  - Click generate new token
  - Add a Note / Name for the token
  - select `repo` and `admin:repo_hook` scopes for you access token
  - Once you click generate, you'll get to see your token
  - Copy this to your clip board or leave this page open to have a reference to your token value.
- Go to your project repository and add your token to your secret.
  - github > repo > settings >  secrets > actions > New Repository Secret
  - Name your secret `PERSONAL_TOKEN`
  - Paste the value from the token created in the step above.

Now whenever you push up your code, gh-pages should be able to create / update your gh-pages branch that deploys your build!
