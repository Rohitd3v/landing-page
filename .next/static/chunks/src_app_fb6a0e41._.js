(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/components/utils/supabase/server.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supabase",
    ()=>supabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/module/index.js [app-client] (ecmascript) <locals>");
;
const supabaseUrl = ("TURBOPACK compile-time value", "https://uzcoqdgdrqdxiumeazbl.supabase.co");
const supabaseKey = ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV6Y29xZGdkcnFkeGl1bWVhemJsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc5MTQ2MzQsImV4cCI6MjA3MzQ5MDYzNH0.eJarhglQ1jkF2b1EFW3l55ywL__XJNi7YqM6uc-4hek");
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseKey);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/components/utils/supabase/blogService.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createBlogPost",
    ()=>createBlogPost
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$utils$2f$supabase$2f$server$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/utils/supabase/server.ts [app-client] (ecmascript)");
;
async function createBlogPost(title, author, thumbnail, sections) {
    try {
        // Insert blog post
        const { data: post, error: postError } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$utils$2f$supabase$2f$server$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("blog_posts").insert([
            {
                title,
                author,
                thumbnail
            }
        ]).select("id").single();
        if (postError) throw postError;
        if (!post) throw new Error("Failed to create blog post");
        // Insert sections
        const sectionsWithBlogId = sections.map((s, i)=>({
                blog_id: post.id,
                heading: s.heading,
                content: s.content,
                section_order: i
            }));
        const { error: sectionError } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$utils$2f$supabase$2f$server$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("blog_sections").insert(sectionsWithBlogId);
        if (sectionError) throw sectionError;
        return post;
    } catch (err) {
        console.error("Error creating blog:", err);
        throw err;
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/blogform/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BlogForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$utils$2f$supabase$2f$blogService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/utils/supabase/blogService.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function BlogForm() {
    _s();
    const [title, setTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [author, setAuthor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [thumbnail, setThumbnail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [sections, setSections] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        {
            heading: "",
            content: "",
            section_order: 0
        }
    ]);
    const addSection = ()=>setSections([
            ...sections,
            {
                heading: "",
                content: "",
                section_order: sections.length
            }
        ]);
    const updateSection = (index, field, value)=>{
        const updated = [
            ...sections
        ];
        updated[index] = {
            ...updated[index],
            [field]: value
        };
        setSections(updated);
    };
    const submit = async ()=>{
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$utils$2f$supabase$2f$blogService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createBlogPost"])(title, author, thumbnail, sections);
            alert("Blog created successfully!");
            setTitle("");
            setAuthor("");
            setThumbnail("");
            setSections([
                {
                    heading: "",
                    content: "",
                    section_order: 0
                }
            ]);
        } catch (err) {
            alert("Failed to create blog. Check console for details.");
            console.error(err);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-3xl mx-auto p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-2xl font-bold mb-4",
                children: "Create Blog"
            }, void 0, false, {
                fileName: "[project]/src/app/blogform/page.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "text",
                placeholder: "Title",
                value: title,
                onChange: (e)=>setTitle(e.target.value),
                className: "border p-2 w-full mb-4"
            }, void 0, false, {
                fileName: "[project]/src/app/blogform/page.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "text",
                placeholder: "Author",
                value: author,
                onChange: (e)=>setAuthor(e.target.value),
                className: "border p-2 w-full mb-4"
            }, void 0, false, {
                fileName: "[project]/src/app/blogform/page.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "text",
                placeholder: "Thumbnail URL",
                value: thumbnail,
                onChange: (e)=>setThumbnail(e.target.value),
                className: "border p-2 w-full mb-4"
            }, void 0, false, {
                fileName: "[project]/src/app/blogform/page.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-xl font-semibold mb-2",
                children: "Sections"
            }, void 0, false, {
                fileName: "[project]/src/app/blogform/page.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            sections.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-4 border p-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            placeholder: "Heading",
                            value: s.heading,
                            onChange: (e)=>updateSection(i, "heading", e.target.value),
                            className: "border p-2 w-full mb-2"
                        }, void 0, false, {
                            fileName: "[project]/src/app/blogform/page.tsx",
                            lineNumber: 75,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                            placeholder: "Content",
                            value: s.content,
                            onChange: (e)=>updateSection(i, "content", e.target.value),
                            className: "border p-2 w-full"
                        }, void 0, false, {
                            fileName: "[project]/src/app/blogform/page.tsx",
                            lineNumber: 82,
                            columnNumber: 11
                        }, this)
                    ]
                }, i, true, {
                    fileName: "[project]/src/app/blogform/page.tsx",
                    lineNumber: 74,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: addSection,
                className: "bg-blue-500 text-white px-4 py-2 rounded mr-2",
                children: "Add Section"
            }, void 0, false, {
                fileName: "[project]/src/app/blogform/page.tsx",
                lineNumber: 90,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: submit,
                className: "bg-green-500 text-white px-4 py-2 rounded",
                children: "Publish Blog"
            }, void 0, false, {
                fileName: "[project]/src/app/blogform/page.tsx",
                lineNumber: 96,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/blogform/page.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
_s(BlogForm, "QDAaU5+TFBQeOFC5evrXViun/XA=");
_c = BlogForm;
var _c;
__turbopack_context__.k.register(_c, "BlogForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_fb6a0e41._.js.map