/*
 * Vencord, a Discord client mod
 * Copyright (c) 2025 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

/* 
This can also be done using the existing `TextReplace` plugin, 
I didn't know about it previously, so I coded it as a standalone plugin.
*/

import definePlugin from "@utils/types";

export default definePlugin({
    name: "fxTwitterLinks",
    description: "Automatically replaces x.com links with fxtwitter.com",
    authors: [{ name: "1a1n", id: 528319770601455636n }],

    onBeforeMessageSend(_channelId, msg) {
        msg.content = msg.content.replace(/\bx\.com(?=\/\w+\/status\/\d+)/g, "fxtwitter.com");
    },
});
