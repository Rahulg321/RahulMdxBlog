import InteractiveBentoGallery from "@/components/21dev/interactive-bento-gallery"

const mediaItems = [
    {
        id: 1,
        type: "image",
        title: "New York City",
        desc: "The city that never sleeps",
        url: "https://images.unsplash.com/photo-1558369178-6556d97855d0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2",
    },
    {
        id: 2,
        type: "image",
        title: "Lin Dan",
        desc: "I love badminton with all my heart",
        url: "/images/lin-dan.webp",
        span: "md:col-span-2 md:row-span-2 col-span-1 sm:col-span-2 sm:row-span-2",
    },
    {
        id: 3,
        type: "image",
        title: "Forest Path",
        desc: "Mystical forest trail",
        url: "https://images.unsplash.com/photo-1544009520-e2ea9189f15e?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        span: "",
    },
    {
        id: 4,
        type: "image",
        title: "Northern Lights",
        desc: "Norway",
        url: "https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2",
    },
    {
        id: 5,
        type: "image",
        title: "Times Square",
        desc: "New York",
        url: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        span: "",
    },
    {
        id: 6,
        type: "image",
        title: "Låtefossen,Skare",
        desc: "Norway",
        url: "https://images.unsplash.com/photo-1607023340835-20b2ade045fd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        span: "",
    },
]

export function BentoGridGalleryDemo() {
    return (
        <div className="min-h-screen overflow-y-auto">
            <InteractiveBentoGallery
                mediaItems={mediaItems}
                title="Image Gallery"
                description=""
            />
        </div>
    )
}
