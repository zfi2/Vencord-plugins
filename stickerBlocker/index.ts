/*
 * Vencord, a Discord client mod
 * Copyright (c) 2024 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import definePlugin from "@utils/types";

export default definePlugin({
    name: "stickerBlocker",
    description: "Blocks all stickers from being displayed in the chat",
    authors: [{ name: "1a1n", id: 528319770601455636n }],

    patches: [
        {
            find: "this.renderStickersAccessories(",
            replacement: {
                match: /this\.renderStickersAccessories\((\i)\)/,
                replace: "null"
            }
        }
    ]
});
