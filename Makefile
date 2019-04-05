define COMMIT_MESSAGE
chore: Version %s built by Travis CI

$(TRAVIS_BUILD_WEB_URL)
[skip ci]
endef
export COMMIT_MESSAGE

publish:
	git remote set-url origin https://muptravis:$(GITHUB_TOKEN)@github.com/$(TRAVIS_REPO_SLUG).git
ifeq ($(TRAVIS_BRANCH), master)
ifeq ($(TRAVIS_PULL_REQUEST), false)
	git checkout master
	lerna publish --conventional-commits --yes -m "$$COMMIT_MESSAGE"
else
	lerna publish --conventional-commits --yes --canary --preid "pr.$(TRAVIS_PULL_REQUEST)" -m "$$COMMIT_MESSAGE" --force-publish
endif
endif