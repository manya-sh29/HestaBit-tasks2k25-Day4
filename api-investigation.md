# API Investigation

## Pagination
- Used `?limit=5&skip=10` in CURL.
- Pagination allows fetching specific number of items per request.

## Headers
- Observed request and response headers using `curl -v`.
- Headers include: User-Agent, Content-Type, Cache-Control, ETag.

## ETag & Caching
- Server returns `ETag` header.
- Resending request with `If-None-Match` returns `304 Not Modified` if content unchanged.

## Observations
- Pagination works as expected.
- Headers give info about server, cache, rate limit.
- ETag helps reduce unnecessary data transfer.
