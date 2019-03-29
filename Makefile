publish:
	git remote set-url origin https://muptravis:$(GITHUB_TOKEN)@github.com/$(TRAVIS_REPO_SLUG).git
ifeq ($(TRAVIS_BRANCH), master)
ifeq ($(TRAVIS_PULL_REQUEST), false)
	git checkout master
	lerna publish --conventional-commits --yes
else
	lerna publish --conventional-commits --yes --canary --preid beta
endif
endif