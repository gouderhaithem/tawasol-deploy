# ---- Tawasol deployable image ----
# Builds the Go server from source and bundles the prebuilt web client.
# Designed for Render (Docker runtime). Listens on :10000 (Render default).

# 1) Build the Go server
FROM golang:1.26-bookworm AS build
WORKDIR /src
COPY server/ ./server/
WORKDIR /src/server
ENV GOFLAGS="" \
    CGO_ENABLED=0 \
    GOTOOLCHAIN=auto
RUN go build -tags sourceavailable -trimpath -o /out/mattermost ./cmd/mattermost

# 2) Runtime
FROM debian:bookworm-slim
RUN apt-get update && apt-get install -y --no-install-recommends \
      ca-certificates tzdata curl \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /mattermost
COPY --from=build /out/mattermost /mattermost/bin/mattermost
COPY server/config    /mattermost/config
COPY server/i18n      /mattermost/i18n
COPY server/templates /mattermost/templates
COPY server/fonts     /mattermost/fonts
COPY client           /mattermost/client

RUN rm -f /mattermost/config/config.json \
    && mkdir -p /mattermost/data /mattermost/logs /mattermost/plugins /mattermost/client/plugins

# Render routes to the port the app listens on; :10000 is Render's default.
ENV MM_SERVICESETTINGS_LISTENADDRESS=:10000 \
    MM_LOGSETTINGS_ENABLECONSOLE=true \
    MM_LOGSETTINGS_CONSOLELEVEL=INFO \
    MM_SQLSETTINGS_DRIVERNAME=postgres \
    GOMEMLIMIT=450MiB

EXPOSE 10000

HEALTHCHECK --interval=30s --timeout=5s --start-period=120s --retries=10 \
  CMD curl -fsS http://localhost:10000/api/v4/system/ping || exit 1

CMD ["/mattermost/bin/mattermost", "server"]
