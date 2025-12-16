/**
 * This file was auto-generated from our API Definition.
 */

import type { MockServer } from "../mock-server/MockServer";

export function mockOAuth(server: MockServer): void {
    const rawRequestBody = { grant_type: "client_credentials" };
    const rawResponseBody = {
        access_token: "access_token",
        token_type: "Bearer",
        expires_in: 3600,
        refresh_token: "refresh_token",
        scope: "scope",
    };
    server
        .mockEndpoint()
        .post("/api/v1/oauth/token")
        .formUrlEncodedBody(rawRequestBody)
        .respondWith()
        .statusCode(200)
        .jsonBody(rawResponseBody)
        .build();
}
