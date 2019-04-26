# based on https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md#running-puppeteer-in-docker
FROM node:8-slim

# Install latest chrome dev package and fonts to support major charsets (Chinese, Japanese, Arabic, Hebrew, Thai and a few others)
# Note: this installs the necessary libs to make the bundled version of Chromium that Puppeteer
# installs, work.
RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
  && sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list' \
  && apt-get update \
  && apt-get install -y google-chrome-unstable fonts-ipafont-gothic fonts-wqy-zenhei fonts-thai-tlwg fonts-kacst ttf-freefont \
  --no-install-recommends \
  && rm -rf /var/lib/apt/lists/*

# Uncomment to skip the chromium download when installing puppeteer. If you do,
# you'll need to launch puppeteer with:
#     browser.launch({executablePath: 'google-chrome-unstable'})
# ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD true


# copy repo root (without node_modules) to working dir
# node_modules are excluded by the .dockerignore rules
# install dependencies

COPY package.json ./
COPY ./ ./
RUN yarn install

# # Add user so we don't need --no-sandbox.
# # same layer as npm install to keep re-chowned files from using up several hundred MBs more space
# RUN groupadd -r pptruser && useradd -r -g pptruser -G audio,video pptruser \
#   && mkdir -p /home/pptruser/Downloads \
#   && chown -R pptruser:pptruser /home/pptruser \
#   && chown -R pptruser:pptruser /node_modules \
#   && chown -R pptruser:pptruser /packages


# Run everything after as non-privileged user.
# USER pptruser

RUN yarn build --scope=@meetup/swarm-styles --scope=@meetup/swarm-constants
# RUN screenshot tests in /packages/swarm-components

# RUN cd packages/swarm-components/ && yarn test || true && ls src/__image_snapshots__
# copy diffs back to local, if any

