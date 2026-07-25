# Tawasol — Deploy image

Self-contained deployable for **Tawasol** (Go backend + prebuilt web client).
Built as one Docker image and hosted on Render, backed by Neon Postgres.

```
server/    Go backend source (compiled during Docker build)
client/    Prebuilt web client (served by the backend)
Dockerfile Multi-stage: build Go server → bundle client → runtime
```

## Runtime configuration (env)
Set these on the host (Render service env):

| Var | Value |
|-----|-------|
| `MM_SQLSETTINGS_DRIVERNAME` | `postgres` |
| `MM_SQLSETTINGS_DATASOURCE` | Neon **direct** URL, `?sslmode=require` (secret) |
| `MM_SQLSETTINGS_MAXOPENCONNS` | `20` |
| `MM_SERVICESETTINGS_SITEURL` | public HTTPS URL of the service |
| `MM_TEAMSETTINGS_SITENAME` | `Tawasol` |

> Use Neon's **direct** endpoint (no `-pooler`) — the pooler runs PgBouncer in
> transaction mode, which breaks prepared statements the server relies on.

Source repos: [tawasol-backend](https://github.com/gouderhaithem/tawasol-backend) · [tawasol-frontend](https://github.com/gouderhaithem/tawasol-frontend)
