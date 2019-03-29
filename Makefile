publish:
ifeq ($(TRAVIS_BRANCH), master)
ifeq ($(TRAVIS_PULL_REQUEST), false)
	git checkout master
	lerna publish --conventional-commits --yes --force-publish --git-remote git@github.com:$(TRAVIS_REPO_SLUG).git
else
	lerna publish --conventional-commits --yes --canary --preid beta
endif
endif