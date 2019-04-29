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

# 1. Build the standard container with visual diff results
# 2. Test whether there were diffs generated
# 3. Copy diffs to local filesystem if they are present
test-visual:
	docker build -t screenshot:latest ./
	docker run -t screenshot:latest \
	docker run -t screenshot:latest test ! -d $(DIFF_PATH) \
		|| docker cp $$(docker create screenshot:latest):$(DIFF_PATH) $(DIFF_PATH) \
		&& (>&2 echo 'visual diff failed, check $(DIFF_PATH) for visual diffs') && false

# 1. Build the standard container with visual diff results
# 2. Test whether there were diffs generated
# 3. Copy diffs to local filesystem if they are present
test-visual-update:
	docker build -t screenshot:latest ./
	docker run -t screenshot:latest yarn lerna run --scope @meetup/swarm-components test:integration:updateSnapshot
	docker cp $$(docker create screenshot:latest):$(SNAPSHOT_PATH) $(COMPONENTS_SRC)
