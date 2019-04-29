# based on https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md#running-puppeteer-in-docker
FROM node:8-slim

# Install latest chrome stable package
# Note: this installs the necessary libs to make the bundled version of Chromium that Puppeteer
# installs work.
RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - && \
  echo "deb http://dl.google.com/linux/chrome/deb/ stable main" > /etc/apt/sources.list.d/google.list && \
  apt-get update && \
  apt-get install -y google-chrome-stable && \
  rm -rf /var/lib/apt/lists/*

COPY ./ ./
RUN yarn install

# build the stylesheets
RUN yarn build --scope=@meetup/swarm-styles --scope=@meetup/swarm-constants

# The container is ready to be run

# To run visual diff tests:
#  docker run \
#   --mount type=bind,source="$$(pwd)/$(SNAPSHOT_PATH)",target=/$(SNAPSHOT_PATH) \
#   -t screenshot:latest \
#   yarn lerna run --scope @meetup/swarm-components test:integration --stream

# To run visual diff tests and save snapshot updates:
# docker run \
#   --mount type=bind,source="$$(pwd)/$(SNAPSHOT_PATH)",target=/$(SNAPSHOT_PATH) \
#   -t screenshot:latest \
#   yarn lerna run --scope @meetup/swarm-components test:integration:updateSnapshot --stream

