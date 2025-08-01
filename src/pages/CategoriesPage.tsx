import CategoryItem from "../components/CategoryItem";

const categories = [
    { href: "/weddings", name: "Weddings", imageUrl: "" },
    { href: "/engagements", name: "Engagements", imageUrl: "" },
    { href: "/anniversaries", name: "Anniversaries", imageUrl: "" },
    { href: "/birthday-parties", name: "Birthday parties", imageUrl: "" },
    { href: "/naming-ceremonies", name: "Naming ceremonies", imageUrl: "" },
    { href: "/family-reunions", name: "Family reunions", imageUrl: "" },
    { href: "/retirement-parties", name: "Retirement Parties", imageUrl: "" },
    { href: "/corporate-parties", name: "Corporate Parties", imageUrl: "" },
    { href: "/educational-events", name: "Educational events", imageUrl: "" },
    { href: "/promotional-events", name: "Promotional events", imageUrl: "" },
    { href: "/entertainment-events", name: "Entertainment events", imageUrl: "" },
    { href: "/religious-events", name: "Religious events", imageUrl: "" },
    { href: "/pre-wedding-shoots", name: "Pre-wedding shoots", imageUrl: "" },
]

const CategoriesPage = () => {
    return (
        <div className="min-h-screen bg-beige text-brown p-8">
            <h1 className="text-3xl font-bold mb-6">Categories</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {categories.map((category) => (
                    <CategoryItem key={category.name} {...category} />
                ))}
            </div>
        </div>
    )
}

export default CategoriesPage
