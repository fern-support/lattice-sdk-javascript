/**
 * This file was auto-generated from our API Definition.
 */

import * as Lattice from "../../src/api/index";
import { LatticeClient } from "../../src/Client";
import { mockServerPool } from "../mock-server/MockServerPool";
import { mockOAuth } from "./mockAuth";

describe("OAuth2Client", () => {
    test("getToken (1)", async () => {
        const server = mockServerPool.createServer();
        mockOAuth(server);

        const client = new LatticeClient({ maxRetries: 0, environment: server.baseUrl });
        const rawRequestBody = { grant_type: "authorization_code" };
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

        const response = await client.oAuth2.getToken({
            grant_type: "authorization_code",
        });
        expect(response).toEqual({
            access_token: "access_token",
            token_type: "Bearer",
            expires_in: 3600,
            refresh_token: "refresh_token",
            scope: "scope",
        });
    });

    test("getToken (2)", async () => {
        const server = mockServerPool.createServer();
        mockOAuth(server);

        const client = new LatticeClient({ maxRetries: 0, environment: server.baseUrl });
        const rawRequestBody = { grant_type: "authorization_code" };
        const rawResponseBody = { key: "value" };
        server
            .mockEndpoint()
            .post("/api/v1/oauth/token")
            .formUrlEncodedBody(rawRequestBody)
            .respondWith()
            .statusCode(400)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.oAuth2.getToken({
                grant_type: "authorization_code",
            });
        }).rejects.toThrow(Lattice.BadRequestError);
    });

    test("getToken (3)", async () => {
        const server = mockServerPool.createServer();
        mockOAuth(server);

        const client = new LatticeClient({ maxRetries: 0, environment: server.baseUrl });
        const rawRequestBody = { grant_type: "authorization_code" };
        const rawResponseBody = { key: "value" };
        server
            .mockEndpoint()
            .post("/api/v1/oauth/token")
            .formUrlEncodedBody(rawRequestBody)
            .respondWith()
            .statusCode(401)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.oAuth2.getToken({
                grant_type: "authorization_code",
            });
        }).rejects.toThrow(Lattice.UnauthorizedError);
    });
});
