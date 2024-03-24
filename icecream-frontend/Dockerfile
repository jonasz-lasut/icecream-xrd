FROM node:20@sha256:8d9887b3b05d2e65598a18616c37cfc271346d12248dfcbeadd7b7bf4da1e827 AS build

WORKDIR /app

COPY . .

RUN npm ci && \
    npm run build && \
    echo '{"type": "module"}' > package.json


FROM node:20-alpine@sha256:f62abc08fe1004555c4f28b6793af8345a76230b21d2d249976f329079e2fef2 AS prod

WORKDIR /app
USER node

ENV HOST="0.0.0.0"

COPY --from=build --chown=node:node /app/package.json /app/package.json
COPY --from=build --chown=node:node /app/node_modules /app/node_modules
COPY --from=build --chown=node:node /app/build /app/build

EXPOSE 3000
ENTRYPOINT [ "node", "/app/build" ]
