/** @type {import)'./$types').PageLoad} */

import { getInitialTracks } from "$lib/server/db";

export function load() {
    const tracks = getInitialTracks();

    return {
        track: {
            title: `Title for ${tracks[0]} goes here`,
            content: `Content for ${tracks[1]} goes here`
        }
    };
};