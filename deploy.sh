# Only deploy to Firebase if on master branch.
echo "Deployment script..."
echo "Checking current branch for deployment."
if [[ $TRAVIS_BRANCH == 'master' ]]; then
  echo "On $TRAVIS_BRANCH branch... Deploying to Firebase!"
  firebase deploy --project alpha-team-84c76 --token=${FIREBASE_API_TOKEN}
  exit 0;
fi
echo "Not on master branch ($TRAVIS_BRANCH), skipping deployment to Firebase."
