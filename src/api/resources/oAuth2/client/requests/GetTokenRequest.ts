/**
 * This file was auto-generated from our API Definition.
 */

/**
 * @example
 *     {}
 */
export interface GetTokenRequest {
    /** The authorization code (required for authorization_code grant type) */
    code?: string;
    /** The redirect URI (required for authorization_code grant type) */
    redirect_uri?: string;
    /** The client identifier */
    client_id?: string;
    /** The client secret */
    client_secret?: string;
    /** The refresh token (required for refresh_token grant type) */
    refresh_token?: string;
    /** The resource owner username (required for password grant type) */
    username?: string;
    /** The resource owner password (required for password grant type) */
    password?: string;
    /** The scope of the access request */
    scope?: string;
}
