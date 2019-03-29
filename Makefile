publish:
ifeq ($(TRAVIS_BRANCH), master)
ifeq ($(TRAVIS_PULL_REQUEST), false)
	lerna publish --conventional-commits --yes
else
	lerna publish --conventional-commits --yes --canary --preid beta
endif
endif