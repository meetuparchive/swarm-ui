COMPONENTS_SRC = packages/swarm-components/src
SNAPSHOT_PATH = $(COMPONENTS_SRC)/__image_snapshots__
DIFF_PATH = $(SNAPSHOT_PATH)/__diff_output__

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
	lerna publish --conventional-commits --yes -m "$$COMMIT_MESSAGE"
else
	lerna publish \
		--conventional-commits \
		--yes \
		--canary \
		--preid "pr.$(TRAVIS_PULL_REQUEST).$(TRAVIS_BUILD_NUMBER)" \
		-m "$$COMMIT_MESSAGE"
endif
endif

upload-artifacts:
	artifacts upload \
		--target-paths swarm-ui-$(TRAVIS_BUILD_NUMBER) \
		$(DIFF_PATH)

# 1. Build the base container
# 2. Run the tests with diff output bound to snapshot path
test-visual:
	docker build -t screenshot:latest ./
	docker run \
		--mount type=bind,source="$$(pwd)/$(SNAPSHOT_PATH)",target=/$(SNAPSHOT_PATH) \
		-t screenshot:latest \
		yarn lerna run --scope @meetup/swarm-components test:integration --stream \
		|| echo "See $$(pwd)/$(DIFF_PATH) for failed test output"

# 1. Build the base container
# 2. Run the tests with updated screenshot output bound to snapshot path
test-visual-update:
	docker build -t screenshot:latest ./
	docker run \
		--mount type=bind,source="$$(pwd)/$(SNAPSHOT_PATH)",target=/$(SNAPSHOT_PATH) \
		-t screenshot:latest \
		yarn lerna run --scope @meetup/swarm-components test:integration:updateSnapshot --stream
