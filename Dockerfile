# based on https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md#running-puppeteer-in-docker
FROM node:8-slim

# Install latest chrome dev package and fonts to support major charsets (Chinese, Japanese, Arabic, Hebrew, Thai and a few others)
# Note: this installs the necessary libs to make the bundled version of Chromium that Puppeteer
# installs work.
RUN cd /tmp &&\
  wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb &&\
  dpkg -i google-chrome-stable_current_amd64.deb;

COPY ./ ./
RUN yarn install

# build the stylesheets
RUN yarn build --scope=@meetup/swarm-styles --scope=@meetup/swarm-constants

# The container is ready to be run

# To run visual diff tests:
# docker run \
#   --mount type=bind,source="$$(pwd)/$(SNAPSHOT_PATH)",target=/$(SNAPSHOT_PATH) \
#   -t screenshot:latest \
#   yarn lerna run --scope @meetup/swarm-components test:integration --stream

# To run visual diff tests and save snapshot updates:
# docker run \
#   --mount type=bind,source="$$(pwd)/$(SNAPSHOT_PATH)",target=/$(SNAPSHOT_PATH) \
#   -t screenshot:latest \
#   yarn lerna run --scope @meetup/swarm-components test:integration:updateSnapshot --stream

