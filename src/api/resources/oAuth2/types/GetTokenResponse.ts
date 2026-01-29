/**
 * This file was auto-generated from our API Definition.
 */

export interface GetTokenResponse {
    /** The access token */
    access_token: string;
    /** The type of token (typically "Bearer") */
    token_type: string;
    /** Lifetime of the access token in seconds */
    expires_in?: number;
    /** The refresh token */
    refresh_token?: string;
    /** The scope of the access token */
    scope?: string;
}
