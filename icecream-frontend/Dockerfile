FROM cgr.dev/chainguard/node@sha256:68ea048eac938baeb9b9612820b7dc2052afc8dcd10472e1ffc15b87496202e5 AS build

WORKDIR /app
USER node

COPY --chown=node:node . .

RUN npm ci && \
    npm run build


FROM cgr.dev/chainguard/node@sha256:68ea048eac938baeb9b9612820b7dc2052afc8dcd10472e1ffc15b87496202e5 AS prod

WORKDIR /app
USER node

ENV HOST="0.0.0.0"

COPY --from=build --chown=node:node /app/package.json /app/package.json
COPY --from=build --chown=node:node /app/node_modules /app/node_modules
COPY --from=build --chown=node:node /app/build /app/build

EXPOSE 3000
ENTRYPOINT [ "node", "/app/build" ]
