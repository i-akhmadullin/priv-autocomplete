module.exports = function(blocks) {
    blocks.declare("b-page_type_asdasd", function(data, page) {
        |

        page.title = "|";
        page.content = [
            {
                block: 'page',
                content: [
                    {
                        block: 'wrap',
                        // mods: { color: 'f6f6f6' },
                        content: [
                            
                        ]
                    },
                    {
                        block: 'blockName',
                        mods: { modName: 'modVal' },
                        content: [
                            
                        ]
                    },
                ]
            }
        ];
        return page;
    });
};

