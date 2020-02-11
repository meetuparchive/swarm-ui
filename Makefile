define COMMIT_MESSAGE
chore(release): Published by Travis CI

$(TRAVIS_BUILD_WEB_URL)
[skip ci]
endef

export COMMIT_MESSAGE # make this value available as env var

publish:
	git remote set-url origin https://muptravis:$(GITHUB_TOKEN)@github.com/$(TRAVIS_REPO_SLUG).git
ifeq ($(TRAVIS_BRANCH), master)
ifeq ($(TRAVIS_PULL_REQUEST), false)
	git checkout master
	git status
	lerna publish --conventional-commits --yes -m "$$COMMIT_MESSAGE"
else
git status
	lerna publish \
		--conventional-commits \
		--yes \
		--canary \
		--preid "pr.$(TRAVIS_PULL_REQUEST).$(TRAVIS_BUILD_NUMBER)" \
		-m "$$COMMIT_MESSAGE"
endif
endif

upload-artifacts:
	whoami
	artifacts upload \
		--target-paths swarm-ui-$(TRAVIS_BUILD_NUMBER) \
		./packages/swarm-components/src/__image_snapshots__/__diff_output__/
